import _ from 'lodash';

const homeWorldsCache = [];

const fetchData = (url) => {
  return fetch(`${url}?format=json`)
    .then(response => response.json())
    .then(json => json);
};

function* fetchNextPage() {
  let nextUrl = 'http://swapi.co/api/people/?format=json&page=1';
  while (nextUrl) {
    yield fetch(nextUrl)
      .then(response => response.json())
      .then(json => { nextUrl = json.next; return json; });
  }
}

const fetchHomeWorldIfNeeded = (characters) => {
  const chars = _.cloneDeep(characters);
  chars.map(c => {
    const found = _.find(homeWorldsCache, { url: c.homeworld });
    if (found) {
      c.homeWorldName = found.name;
      return c;
    }
    else {
      fetchData(c.homeworld)
        .then(json => {
          c.homeWorldName = json.name;
          // add to cache
          homeWorldsCache.push({ url: c.homeworld, name: json.name });
          return c;
        });
    }
  });

  return chars;
};

// to fetch all characters from all pages using the recursive function fetchCharacters()
export const fetchAllCharacters = () => {
  let chars = [];

  return new Promise(function (resolve) {

    const fetchCharacters = (nextPage) => {
      if (!nextPage) {
        nextPage = fetchNextPage();
      }
      const nextResult = nextPage.next();
      if (nextResult.value) {
        nextResult.value.then(response => {
          const results = fetchHomeWorldIfNeeded(response.results);
          chars = chars.concat(results);
          if (!nextResult.done) {
            fetchCharacters(nextPage);
          }
        });
      }
      else {
        resolve(chars);
      }
    };

    fetchCharacters();
  });
};

const fetchDetails = (urls, index, jsonName) => {
  return new Promise(function (resolve) {

    const promises = urls.map(url => fetchData(url).then(json => json[jsonName]));
    Promise.all(promises).then(values => resolve({index, values}));
  });
};

// to fetch all details for the character from other APIs 
export const fetchCharacterDetails = (character) => {
  return new Promise(function (resolve) {
    const films = fetchDetails(character.films, 'filmTitles', 'title')
      .then(films => films);
    const species = fetchDetails(character.species,'specieTitles', 'name')
      .then(species => species);
    const vehicles = fetchDetails(character.vehicles, 'vehicleTitles', 'name')
      .then(vehicles => vehicles);
    const starships = fetchDetails(character.starships, 'starshipTitles', 'name')
      .then(starships => starships);

    const promises = [films, species, vehicles, starships];
    Promise.all(promises).then(values => resolve(values));
  });
};


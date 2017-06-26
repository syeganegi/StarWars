import _ from 'lodash';
import objectAssign from 'object-assign';

// first sorts descending on popularity (total up and down votes) then on name ascending
export const compareCharacter = (a, b) => {
    if (a.upVotes + a.downVotes < b.upVotes + b.downVotes) {
        return 1;
    }
    if (a.upVotes + a.downVotes > b.upVotes + b.downVotes) {
        return -1;
    }

    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }

    return 0;
};

const createLinkName = str => str ? str.replace(/[^a-z0-9]/gi, '-').toLowerCase() : str;

export const initializeCharacters = characters =>
    characters.map(character => objectAssign({}, character,
        {
            linkName: createLinkName(character.name),
            upVotes: 0,
            downVotes: 0,
            filmTitles: [],
            specieTitles: [],
            vehicleTitles: [],
            starshipTitles: [],
            comments: []
        }));

export const getVisibleCharacters = (characters, filter) => {
    if (!filter || filter.length === 0 || !characters) {
        return characters;
    }

    return _.filter(characters, (char) => _.startsWith(_.lowerCase(char.name), _.lowerCase(filter)));
};

export const percentage = (value, total) => total && total !== 0 ? Math.floor((value / total) * 100) + '%' : '';

export const removeItem = (list, index) => {
    return [
        ...list.slice(0, index),
        ...list.slice(index + 1)
    ];
};

export const replaceItem = (list, index, item) => {
    return [
        ...list.slice(0, index),
        ...list.slice(index + 1),
        item
    ];
};


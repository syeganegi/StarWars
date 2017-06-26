import _ from 'lodash';
import * as types from '../constants/actionTypes';
import { compareCharacter, replaceItem } from '../utils/helper.js';
import initialState from './initialState';

const recieveCharacters = (state, action) => {
  let newState;
  newState = {...state, isLoading: false };
  newState.characters = action.characters.sort(compareCharacter);
  return newState;
};

const doVotingWithClone = (character, upVote) =>
  upVote ? {...character, upVotes: character.upVotes + 1 }
    : {...character, downVotes: character.downVotes - 1 };

const recieveCharacter = (state, character) => {
  let newState, newVote;
  newState = {...state, character: character };
  newState.characters = action.characters.sort(compareCharacter);
  return newState;
};

const receiveDetails = (state, details) => {
  const newState = {...state, character: {...state.character } };
  details.forEach((element) => {
    newState.character[element.index] = element.values;
  });
  return newState;
};

const vote = (state, upVote) => {
  let newState;
  const index = _.findIndex(state.characters, { name: state.character.name });
  if (index >= 0) {
    const curChar = state.characters[index];
    const newChar = doVotingWithClone(curChar, upVote);
    newState = {...state, characters: replaceItem(state.characters, index, newChar), character: newChar };
    newState.characters = newState.characters.sort(compareCharacter);

    // also update totals
    if (upVote) {
      newState.totalUps++;
    }
    else {
      newState.totalDowns++;
    }
  }
  else {
    throw new Error('Whoops! character not found');
  }

  return newState;
};

const addComment = (state, comment) => {
  const newState = {...state, comments: [...state.comments, {...comment, key: state.character.name}] };
return newState;
};

export default function starsWarReducer(state = initialState.starWars, action) {

  switch (action.type) {
    case types.RECEIVING_CHARACTERS:
      return {...state, isLoading: true };

    case types.RECEIVE_CHARACTERS:
      return recieveCharacters(state, action);

    case types.RECEIVE_CHARACTER:
      return {...state, character: action.character };

    case types.RECEIVE_CHARACTER_DETAILS:
      return receiveDetails(state, action.details);

    case types.FILTER_CHANGED:
      return {...state, filter: action.value };

    case types.VOTE_UP:
      return vote(state, true);

    case types.VOTE_DOWN:
      return vote(state, false);

    case types.SUBMIT_COMMENT:
      return addComment(state, action.comment);

    default:
      return state;
  }
}
import * as types from '../constants/actionTypes';
import { fetchAllCharacters, fetchCharacterDetails } from '../apis/starWarsApi';
import { initializeCharacters } from '../utils/helper.js';

const receivingCharacters = () => {
    return {
        type: types.RECEIVING_CHARACTERS,
    };
};

const receiveCharacters = (chars) => {
    return {
        type: types.RECEIVE_CHARACTERS,
        characters: chars
    };
};

const receiveCharacterDetails = (details) => {
    return {
        type: types.RECEIVE_CHARACTER_DETAILS,
        details
    };
};

export const loadCharacters = () => {
    return (dispatch) => {
        dispatch(receivingCharacters());
        fetchAllCharacters()
            .then(chars => initializeCharacters(chars))
            .then(chars => dispatch(receiveCharacters(chars)));
    };
};

export const loadCharacterDetails = (character) => {
    return (dispatch) => {
        fetchCharacterDetails(character)
            .then(details => dispatch(receiveCharacterDetails(details)));
    };
};

export const receiveCharacter = (character) => {
    return {
        type: types.RECEIVE_CHARACTER,
        character
    };
};

export const voteUp = () => {
    return {
        type: types.VOTE_UP
    };
};

export const voteDown = () => {
    return {
        type: types.VOTE_DOWN
    };
};

export const filterChanged = (value) => {
    return {
        type: types.FILTER_CHANGED,
        value
    };
};

export const submitComment = (comment) => {
    return {
        type: types.SUBMIT_COMMENT,
        comment
    };
};
import reducer from './starWarsReducer';
import * as ActionTypes from '../constants/actionTypes';
import initialState from './initialState';

import sinonChai from 'sinon-chai';
import chai, { expect } from 'chai';

chai.use(sinonChai);

describe('starWarsReducer', () => {

    const getAppState = () => {
        return {
            filter: 'A',
            characters: [{ name: 'BB8', upVotes: 10, downVotes: -5 }, { name: 'Darth Maul', upVotes: 0, downVotes: 0 }],
            character: { name: 'BB8', films: ['film1', 'film2'] },
            comments: [{ key: 'BB8', text: 'Hello' }],
            totalUps: 10,
            totalDowns: 5,
            isLoading: false
        };
    };

    it('should set initial state by default', () => {
        const action = { type: 'unknown' };
        const expected = initialState.starWars;

        expect(reducer(undefined, action)).to.deep.equal(expected);
    });

    it('should handle RECEIVING_CHARACTERS', () => {
        const action = { type: ActionTypes.RECEIVING_CHARACTERS };
        const expected = Object.assign(getAppState(), { isLoading: true });

        expect(reducer(getAppState(), action)).to.deep.equal(expected);
    });

    it('should handle RECEIVE_CHARACTERS', () => {
        const action = { type: ActionTypes.RECEIVE_CHARACTERS, characters: getAppState().characters };
        const expected = Object.assign(getAppState(), { isLoading: false });

        expect(reducer(getAppState(), action)).to.deep.equal(expected);
    });

    it('should handle FILTER_CHANGED', () => {
        const action = { type: ActionTypes.FILTER_CHANGED, value: getAppState().filter };
        const expected = Object.assign(getAppState(), { filter: 'A' });

        expect(reducer(getAppState(), action)).to.deep.equal(expected);
    });

    it('should handle RECEIVE_CHARACTER', () => {
        const action = { type: ActionTypes.RECEIVE_CHARACTER, character: getAppState().character };
        const expected = Object.assign(getAppState());

        expect(reducer(getAppState(), action)).to.deep.equal(expected);
    });

    it('should handle RECEIVE_CHARACTER_DETAILS', () => {
        const action = {
            type: ActionTypes.RECEIVE_CHARACTER_DETAILS,
            details: [{ index: 'films', values: getAppState().character.films }]
        };
        const expected = Object.assign(getAppState());

        expect(reducer(getAppState(), action)).to.deep.equal(expected);
    });

    it('should handle VOTE_UP', () => {
        const action = { type: ActionTypes.VOTE_UP };
        const expected = Object.assign(getAppState(),
            { totalUps: 11 },
            { characters: [{ name: 'BB8', upVotes: 11, downVotes: -5 }, { name: 'Darth Maul', upVotes: 0, downVotes: 0 }] },
            { character: { name: 'BB8', upVotes: 11, downVotes: -5 } });
        expect(reducer(getAppState(), action)).to.deep.equal(expected);
    });

    it('should handle VOTE_DOWN', () => {
        const action = { type: ActionTypes.VOTE_DOWN };
        const expected = Object.assign(getAppState(),
            { totalDowns: 6 },
            { characters: [{ name: 'BB8', upVotes: 10, downVotes: -6 }, { name: 'Darth Maul', upVotes: 0, downVotes: 0 }] },
            { character: { name: 'BB8', upVotes: 10, downVotes: -6 } });
        expect(reducer(getAppState(), action)).to.deep.equal(expected);
    });

    it('should handle SUBMIT_COMMENT', () => {
        const comment = getAppState().comments[0]
        const action = { type: ActionTypes.SUBMIT_COMMENT, comment: comment };
        const expected = Object.assign(getAppState(), { comments: [...getAppState().comments, comment] });
        expect(reducer(getAppState(), action)).to.deep.equal(expected);
    });
});
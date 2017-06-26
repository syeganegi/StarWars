import * as ActionTypes from '../constants/actionTypes';
import * as ActionCreators from './starWarsActions';
import * as Apis from '../apis/starWarsApi';
import * as helpers from '../utils/helper.js';

import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai, { expect } from 'chai';
import sinonStubPromise from 'sinon-stub-promise';

chai.use(sinonChai);

describe('Actions', () => {

    before(() => {
        sinonStubPromise(sinon);
    });

    it('voteUp should create VOTE_UP action', () => {
        const actual = ActionCreators.voteUp();
        const expected = {
            type: ActionTypes.VOTE_UP,
        };
        expect(actual).to.deep.equal(expected);
    });

    it('voteDown should create VOTE_DOWN action', () => {
        const actual = ActionCreators.voteDown();
        const expected = {
            type: ActionTypes.VOTE_DOWN,
        };
        expect(actual).to.deep.equal(expected);
    });

    it('submitComment should create SUBMIT_COMMENT action', () => {
        const comment = { key: 'key', author: 'John', text: 'Hello React!' };
        const actual = ActionCreators.submitComment(comment);
        const expected = {
            type: ActionTypes.SUBMIT_COMMENT,
            comment: Object.assign({}, comment)
        };
        expect(actual).to.deep.equal(expected);
    });

    it('filterChanged should create FILTER_CHANGED action', () => {
        const actual = ActionCreators.filterChanged('BB8');
        const expected = {
            type: ActionTypes.FILTER_CHANGED,
            value: 'BB8'
        };
        expect(actual).to.deep.equal(expected);
    });

    it('loadCharacters should create RECEIVE_CHARACTERS action', () => {
        // arrange
        const expectedResponse = [{ name: 'BB8' }, { name: 'Darth Maul' }];
        const expected = {
            type: ActionTypes.RECEIVE_CHARACTERS,
            characters: Object.assign([], expectedResponse)
        };
        const dispatch = sinon.spy();
        sinon.stub(helpers, 'initializeCharacters').returns(expectedResponse);
        const promise = sinon.stub(Apis, 'fetchAllCharacters').returnsPromise();
        promise.resolves(expectedResponse);

        // act
        ActionCreators.loadCharacters()(dispatch);

        // assert
        expect(dispatch).to.have.been.calledWith({
            type: ActionTypes.RECEIVING_CHARACTERS,
        });
        expect(dispatch).to.have.been.calledWith(expected);
    });

    it('loadCharacterDetails should create RECEIVE_CHARACTER_DETAILS action', () => {
        // arrange
        const expectedResponse = { filmTitles: ['film1', 'film2'] };
        const expected = {
            type: ActionTypes.RECEIVE_CHARACTER_DETAILS,
            details: Object.assign({}, expectedResponse)
        };
        const dispatch = sinon.spy();
        const character = { name: 'Luke Skywalker' };
        const promise = sinon.stub(Apis, 'fetchCharacterDetails').returnsPromise();
        promise.resolves(expectedResponse);

        // act
        ActionCreators.loadCharacterDetails(character)(dispatch);

        // assert
        expect(dispatch).to.have.been.calledWith(expected);
    });

    it('receiveCharacter should create RECEIVE_CHARACTER action', () => {
        const character = { name: 'Luke Skywalker', hair_color: 'blond', films: ['film1', 'film2'] };
        const actual = ActionCreators.receiveCharacter(character);
        const expected = {
            type: ActionTypes.RECEIVE_CHARACTER,
            character: Object.assign({}, character)
        };
        expect(actual).to.deep.equal(expected);
    });

});
import * as helpers from './helper';
import sinonChai from 'sinon-chai';
import chai, { expect } from 'chai';

chai.use(sinonChai);

describe('helper', () => {
    let characters;

    before(() => {
        characters = [{ name: 'BB8' }, { name: 'Darth Maul' }];
    });

    it('getVisibleCharacters should filter characters', () => {
        const actual = helpers.getVisibleCharacters(characters, 'd');
        expect(actual.length).to.equal(1);
        expect(actual).to.deep.equal([{ name: 'Darth Maul' }]);
    });

    describe('compareCharacter', () => {
        it('should return 1 when char2 has higher total votes', () => {
            const char1 = { upVotes: 1, downVotes: -1, name: 'Jack' };
            const char2 = { upVotes: 2, downVotes: -1, name: 'Luke' };
            const actual = helpers.compareCharacter(char1, char2);
            expect(actual).to.equal(1);
        });

        it('should return -1 when char1 has higher total votes', () => {
            const char1 = { upVotes: 2, downVotes: -1, name: 'Jack' };
            const char2 = { upVotes: 1, downVotes: -1, name: 'Luke' };
            const actual = helpers.compareCharacter(char1, char2);
            expect(actual).to.equal(-1);
        });

        it('should return 1 when char1 name is greater', () => {
            const char1 = { upVotes: 0, downVotes: 0, name: 'A' };
            const char2 = { upVotes: 0, downVotes: 0, name: 'B' };
            const actual = helpers.compareCharacter(char1, char2);
            expect(actual).to.equal(-1);
        });

        it('should return -1 when char2 name is greater', () => {
            const char1 = { upVotes: 0, downVotes: 0, name: 'B' };
            const char2 = { upVotes: 0, downVotes: 0, name: 'C' };
            const actual = helpers.compareCharacter(char1, char2);
            expect(actual).to.equal(-1);
        });

        it('should return 0 when all equal', () => {
            const char1 = { upVotes: 0, downVotes: 0, name: 'A' };
            const char2 = { upVotes: 0, downVotes: 0, name: 'A' };
            const actual = helpers.compareCharacter(char1, char2);
            expect(actual).to.equal(0);
        });
    });
});
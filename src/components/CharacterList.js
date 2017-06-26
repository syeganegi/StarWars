import React, { PropTypes } from 'react';
import Character from './Character';

const CharacterList = ({ characters, onCharacterClick }) => (
  <ul className="list-unstyled">
    {characters.map((character, id) =>
      <Character
        key={id}
        character={character}
        onClick={onCharacterClick}
      />
    )}
  </ul>);

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    linkName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onCharacterClick: PropTypes.func.isRequired
};

export default CharacterList;
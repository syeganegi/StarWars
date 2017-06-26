import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Character = ({character, onClick}) => (
  <li
    onClick={() => onClick(character)}>
    <div>
      <h4>
        <Link to={`/characters/${character.linkName}`}>{character.name}</Link>{' '}
        <small><span className="label label-default">{character.homeWorldName}</span></small>{' '}
        <small><span className="label label-success">{character.upVotes}</span></small>{' '}
        <small><span className="label label-warning">{character.downVotes}</span></small>
      </h4>

    </div>
  </li>
);

Character.propTypes = {
  character: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Character;
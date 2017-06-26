import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import FieldView from './FieldView';
import ListView from './ListView';
import { percentage } from '../utils/helper';

const CharacterDetails = ({ character, totalUps, totalDowns, onUpVote, onDownVote }) => (
  <div className="character-details">
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h3 className="panel-title">{character.name}</h3>
      </div>
      <div className="panel-body">
        <div className="row">
          <div className="col-xs-12">
            <button className="btn btn-success" onClick={onUpVote} title="Vote Up"><span className="glyphicon glyphicon-hand-up" aria-hidden="true" /></button>{' '}
            <button className="btn btn-warning" onClick={onDownVote} title="Vote Down"><span className="glyphicon glyphicon-hand-down" aria-hidden="true" /></button>
          </div>
        </div>
        <FieldView label="Up Votes" valueClassName="label label-success" value={character.upVotes + ' ' + percentage(character.upVotes, totalUps)} />
        <FieldView label="Down Votes" valueClassName="label label-warning" value={character.downVotes + ' ' + percentage(Math.abs(character.downVotes), totalDowns)} />
        <FieldView label="Height" value={character.height} />
        <FieldView label="Mass" value={character.mass} />
        <FieldView label="Hair Color" value={character.hair_color} />
        <FieldView label="Skin Color" value={character.skin_color} />
        <FieldView label="Eye Color" value={character.eye_color} />
        <FieldView label="Birth Year" value={character.birth_year} />
        <FieldView label="Gender" value={character.gender} />
        <FieldView label="Home World" value={character.homeWorldName} />
        <ListView label="Films" list={character.filmTitles} />
        <ListView label="Species" list={character.specieTitles} />
        <ListView label="Vehicles" list={character.vehicleTitles} />
        <ListView label="Starships" list={character.starshipTitles} />
      </div>
    </div>
    <Link to="/" className="btn btn-primary">Back</Link>
  </div>
);

CharacterDetails.propTypes = {
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
  character: PropTypes.object.isRequired,
  totalUps: PropTypes.number.isRequired,
  totalDowns: PropTypes.number.isRequired,
};

export default CharacterDetails;
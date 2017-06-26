import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CharacterList from '../components/CharacterList';
import Filter from '../components/Filter';
import * as actions from '../actions/starWarsActions';
import { getVisibleCharacters } from '../utils/helper';

class CharactersListPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {characters, isLoading, actions, filter} = this.props;

    return (
      <div>
        {isLoading ? <h2>Loading...</h2> :
          <div>
            <Filter filter={filter} onFilterChange={actions.filterChanged} />
            <CharacterList characters={characters} onCharacterClick={actions.receiveCharacter} />
          </div>
        }
      </div>);
  }
}

CharactersListPage.propTypes = {
  characters: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
  filter: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const {characters, filter, isLoading} = state.starWarsReducer;
  return {
    characters: getVisibleCharacters(characters, filter),
    isLoading,
    filter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    dispatch
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharactersListPage);
import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CharacterDetails from '../components/CharacterDetails';
import CommentBox from '../components/CommentBox';
import * as actions from '../actions/starWarsActions';

class CharacterDetailsPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { actions } = this.props;
        actions.loadCharacterDetails(this.props.character);
    }

    render() {
        const { character, comments, totalUps, totalDowns, actions } = this.props;
        return (
            <div className="col-sm-8">
                <CharacterDetails
                    character={character}
                    totalUps={totalUps}
                    totalDowns={totalDowns}
                    onUpVote={actions.voteUp}
                    onDownVote={actions.voteDown} />
                <CommentBox comments={comments} onCommentSubmit={actions.submitComment} />
            </div>
        );
    }
}

CharacterDetailsPage.propTypes = {
    character: PropTypes.object.isRequired,
    comments: PropTypes.array,
    totalUps: PropTypes.number.isRequired,
    totalDowns: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const {character, comments, totalUps, totalDowns} = state.starWarsReducer;
    return {
        character: character,
        comments: _.filter(comments, { key: character.name }),
        totalUps: totalUps,
        totalDowns: totalDowns
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
)(CharacterDetailsPage);
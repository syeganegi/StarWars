import React, { Component, PropTypes } from 'react';

class Comment extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {author } = this.props;
        return (<div className="comment">
            <h2 className="commentAuthor">
                <span className="glyphicon glyphicon-user" aria-hidden="true"></span>{' '}{author}
            </h2>
            <span dangerouslySetInnerHTML={{ __html: this.props.children.toString() }} />
        </div>
        );
    }
}

Comment.propTypes = {
    author: PropTypes.string.isRequired
};

export default Comment;
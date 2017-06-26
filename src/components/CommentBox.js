import React, { PropTypes } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const CommentBox = ({ comments, onCommentSubmit }) => (
    <div className="commentBox">
        <h3>Comments</h3>
        <CommentList data={comments} />
        <CommentForm onCommentSubmit={onCommentSubmit} />
    </div>);

CommentBox.propTypes = {
    onCommentSubmit: PropTypes.func.isRequired,
    comments: PropTypes.array.isRequired
};

export default CommentBox;
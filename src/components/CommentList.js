import React, { PropTypes } from 'react';
import Comment from './Comment';

const commentNodes = (data) => data.map((comment, id) => {
    return (
        <Comment key={id} author={comment.author}>
            {comment.text}
        </Comment>
    );
});

const CommentList = ({ data }) => (
    <div className="commentList">
        {commentNodes(data)}
    </div>);

CommentList.propTypes = {
    data: PropTypes.array.isRequired
};

export default CommentList;
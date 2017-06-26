import React, { Component, PropTypes } from 'react';

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const author = this.textAuthor.value.trim();
        const text = this.textText.value.trim();
        if (!text || !author) {
            return;
        }
        this.props.onCommentSubmit({ author: author, text: text });
        this.textAuthor.value = '';
        this.textText.value = '';
        return;
    }

    render() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <input className="form-control input-lg" type="text" ref={(input) => { this.textAuthor = input; } } placeholder="Your name" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <textarea className="form-control input-lg" type="text" ref={(input) => { this.textText = input; } } placeholder="Say something..." />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <input type="submit" value="Post" className="form-control input-lg btn btn-primary" />
                    </div>
                </div>
            </form>
        );
    }
}

CommentForm.propTypes = {
    onCommentSubmit: PropTypes.func.isRequired
};

export default CommentForm;
import { getArticleComments, deleteById } from "../api";
import React, { Component } from "react";
import CommentCard from "./CommentCard";
import SubmitComment from "./SubmitComment";

class CommentList extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    this.fetchComments();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.article_id !== this.props.article_id) {
      this.fetchComments();
    }
  }

  render() {
    const { comments } = this.state;
    const { article_id, username } = this.props;

    return (
      <div className="container">
        <SubmitComment
          pushComment={this.pushComment}
          article_id={article_id}
          username={username}
        />

        <h3>Comments</h3>

        <ul>
          {comments.map((comment, index) => {
            return (
              <CommentCard
                comment={comment}
                index={index}
                username={username}
                key={comment.comment_id}
                removeComment={this.removeComment}
              />
            );
          })}
        </ul>
      </div>
    );
  }
  pushComment = commentToSubmit => {
    this.setState(currentState => {
      return { comments: [commentToSubmit, ...currentState.comments] };
    });
  };

  fetchComments = () => {
    getArticleComments(this.props.article_id).then(comments => {
      this.setState({ comments });
    });
  };

  removeComment = (comment_id, target, index) => {
    deleteById(comment_id, target).then(response => {
      if (response === 204) {
        this.setState(currentState => {
          currentState.comments.splice(index, 1);
          return { comments: currentState.comments };
        });
      }
    });
  };
}

export default CommentList;

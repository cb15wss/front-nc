import { getArticleComments, deleteById } from "../api";

import React, { Component } from "react";
import CommentCard from "./CommentCard";

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
    console.log("comment list", this.props);
    const { comments } = this.state;
    const { article_id, username } = this.props;

    return (
      <>
        <p>Comments:</p>
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
      </>
    );
  }
  pushComment = newComment => {
    this.setState(currentState => {
      return { comments: [newComment, ...currentState.comments] };
    });
  };

  fetchComments = () => {
    getArticleComments(this.props.article_id).then(comments => {
      this.setState({ comments });
    });
  };
}

export default CommentList;

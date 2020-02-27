import React, { Component } from "react";
import { getArticleComments } from "../api";
import CommentCard from "./CommentCard";

class CommentsList extends Component {
  state = { comments: [], isLoading: true };

  componentDidMount() {
    this.fetchComments();
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.article_id !== this.props.article_id) {
  //     this.fetchComments();
  //   }
  // }

  render() {
    // console.log(this.state.comments);
    //const { article_id } = this.props;
    const { comments } = this.state;

    return (
      <>
        <div className="container">
          {" "}
          <h2>Comments</h2>
          <ul>
            {comments.map(comment => {
              return <CommentCard comment={comment} key={comment.comment_id} />;
            })}
          </ul>
        </div>
      </>
    );
  }

  fetchComments = () => {
    console.log(this.props.article_id, "<<<<<<");
    getArticleComments(this.props.article_id).then(comments => {
      this.setState({ comments });
    });
  };
}

export default CommentsList;

import React, { Component } from "react";

class Comment extends Component {
  state = {
    comment: {},
    isLoading: true
  };
  render() {
    return (
      <div className="container">
        <h2>Comment</h2>
      </div>
    );
  }
}

export default Comment;

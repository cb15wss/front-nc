import React, { Component } from "react";
import { insertComment } from "../api";

class SubmitComment extends Component {
  state = { title: "", body: "", viewForm: false };

  render() {
    // console.log("submit comment username", this.props.username);

    const { body, viewForm } = this.state;
    return (
      <div className="container">
        <button className="btn btn-primary" onClick={this.toggleViewForm}>
          Post Your Comment as {this.props.username}
        </button>
        {viewForm && (
          <form onSubmit={this.SubmitComment}>
            <textarea
              type="text"
              name="body"
              onChange={this.handleChange}
              value={body}
              id="submit-comment-field"
              placeholder="Add Your Comment"
            />
            <button id="submit-comment-button" type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
    );
  }

  toggleViewForm = () => {
    this.setState(currentState => {
      return { viewForm: !currentState.viewForm };
    });
  };

  SubmitComment = event => {
    event.preventDefault();
    const { body } = this.state;
    const { username } = this.props;
    const { pushComment } = this.props;
    if (body) {
      this.setState({ body: "", showForm: false });
      const { article_id } = this.props;
      insertComment(article_id, { username: username, body: body })
        .then(comment => {
          pushComment(comment);
        })
        .catch(err => {
          console.dir(err);
        });
    }
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };
}

export default SubmitComment;

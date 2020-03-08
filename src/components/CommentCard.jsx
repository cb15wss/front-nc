import React from "react";
import { Link } from "@reach/router";
import Vote from "./Vote";

const CommentCard = ({ comment, index, username, removeComment }) => {
  // console.log(username);
  const { author, created_at, body, comment_id, votes } = comment;
  return (
    <>
      <div className="container">
        <li className="card mb-4" key={comment_id}>
          <div className="card-body"></div>
          <p className="card-text">{body}</p>
          <div className="card-header">
            Posted on {created_at} <br /> by:
            <Link to={`/users/${author}`}>{author}</Link>
          </div>
          <div className="card-footer text-muted">
            {username !== author && (
              <Vote votes={votes} id={comment_id} target={"comments"} />
            )}

            {username === author && (
              <button
                className="btn btn-danger"
                onClick={() => removeComment(comment_id, "comments", index)}
              >
                Delete
              </button>
            )}
          </div>
        </li>
      </div>
    </>
  );
};

export default CommentCard;

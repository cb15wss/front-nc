import React from "react";
import { Link } from "@reach/router";

const CommentCard = ({ comment }) => {
  const { author, created_at, body, comment_id, votes } = comment;
  return (
    <>
      <div className="container">
        <li className="card mb-4" key={comment_id}>
          <div className="card-body"></div>
          <p className="card-text">{body}</p>
          <div className="card-header">
            {" "}
            Posted on {created_at} <br /> by:
            <Link to={`/users/${author}`}>{author}</Link>
          </div>
          <div className="card-footer text-muted">Votes: {votes}</div>
        </li>
      </div>
    </>
  );
};

export default CommentCard;

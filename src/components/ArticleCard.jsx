import React from "react";
import { Link } from "@reach/router";
import Vote from "./Vote";

const ArticleCard = props => {
  const {
    topic,
    title,
    author,
    comment_count,
    votes,
    article_id,
    body,
    created_at
  } = props.article;
  const { username } = props;

  return (
    <div className="container">
      <div className="card mb-4">
        <div className="card-header"> {topic}</div>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="card-text">{body}</p>
          <p className="badge badge-primary">comments: {comment_count}</p>

          <div>
            {username !== author && (
              <Vote votes={votes} id={article_id} target={"articles"} />
            )}
          </div>

          <Link to={`/articles/${article_id}`}>Read Article →</Link>
        </div>
        <div className="card-footer text-muted">
          Posted on {created_at} by:
          <Link to={`/users/${author}`}>{author}</Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;

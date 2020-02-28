import React from "react";
import { Link } from "@reach/router";
//import ArticleView from "./ArticleView";

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
  console.log(article_id);
  return (
    <>
      <div className="card mb-4">
        <div className="card-header"> {topic}</div>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="card-text">{body}</p>
          <p className="card-text">comments: {comment_count}</p>
          <p className="card-text">Votes: {votes}</p>

          <Link to={`/articles/${article_id}`}>Read Article →</Link>
        </div>
        <div className="card-footer text-muted">
          Posted on {created_at} by:
          <Link to={`/users/${author}`}>{author}</Link>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;

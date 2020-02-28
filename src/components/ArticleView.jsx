import React, { Component } from "react";
import { getArticle } from "../api";
//import ArticleCard from "./ArticleCard";
import { Link } from "@reach/router";

import CommentList from "./CommentList";

//console.log("get article", getArticle);

class ArticleView extends Component {
  state = { article: {}, isLoading: true, comments: [] };

  componentDidMount() {
    this.fetchArticleWithComments();
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.article_id !== this.props.article_id) {
  //     this.fetchArticleWithComments();
  //   }
  // }

  render() {
    const {
      title,
      body,
      topic,
      author,
      comment_count,
      votes,
      created_at
    } = this.state.article;
    const { article_id } = this.props;
    {
      console.log("article view props", this.props);
    }
    return (
      <div className="container">
        <h1>Article ID:{article_id} </h1>

        <div className="card mb-4">
          <div className="card-header">
            {" "}
            Topic: {topic} <br />
            Posted on {created_at} by:
            <Link to={`/users/${author}`}>{author}</Link>
          </div>

          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className="card-text">{body}</p>
          </div>
          <div className="card-footer text-muted">
            Votes: {votes}
            <br />
            Comments: {comment_count}
          </div>
        </div>
        <Link to={`/articles/${article_id}/comments`}>Add Comment</Link>
        <CommentList article_id={article_id} username={this.props.username} />
      </div>
    );
  }

  fetchArticleWithComments = () => {
    const { article_id } = this.props;
    console.log(article_id, "Article view");
    getArticle(article_id)
      .then(article => {
        // console.log("article in fetch article", article);
        this.setState({ article, isLoading: false });
      })
      .catch(err => {
        console.dir(err);
      });
  };
}

export default ArticleView;

/*   <SubmitComment
            article_id={article_id}
            username={this.props.username}

               <Link to={`/articles/${article_id}/comments`}>Add Comment</Link>
        </div>
          />*/

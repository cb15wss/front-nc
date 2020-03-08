import React, { Component } from "react";
import { getArticle } from "../api";
import { Link } from "@reach/router";
import CommentList from "./CommentList";
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";

class ArticleView extends Component {
  state = {
    article: {},
    isLoading: true,
    comments: [],
    notFound: false
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.article_id !== this.props.article_id) {
      this.fetchArticles();
    }
  }

  render() {
    const {
      article: { title, body, topic, author, created_at, article_id },
      notFound,
      isLoading,
      error
    } = this.state;

    if (isLoading) return <Loading />;
    if (notFound) return <ErrorPage />;
    return (
      <div className="container">
        <div className="card mb-4">
          <div className="card-header">
            Topic: {topic} <br />
            Posted on {created_at} by:
            <Link to={`/users/${author}`}>{author}</Link>
          </div>

          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className="card-text">{body}</p>
          </div>
          <div className="card-footer text-muted"></div>
          <CommentList article_id={article_id} username={this.props.username} />
        </div>
      </div>
    );
  }

  fetchArticles = () => {
    const { article_id } = this.props;
    // console.log(article_id, "Article view");
    getArticle(article_id)
      .then(article => {
        //console.log("article in fetch article", article);
        this.setState({ article, isLoading: false, notFound: false });
      })
      .catch(err => {
        this.setState({ isLoading: false, notFound: true });
      });
  };
}

export default ArticleView;

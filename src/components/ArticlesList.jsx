import React, { Component } from "react";
import { getArticles } from "../api.js";
import ArticleCard from "./ArticleCard";
import { Router } from "@reach/router";
import ArticleView from "./ArticleView";

class ArticlesList extends Component {
  state = { articles: [], isLoading: true };

  componentDidMount() {
    this.fetchArticles();
  }
  render() {
    const { articles } = this.state;
    return (
      <>
        <div className="container">
          <h1>Articles</h1>
          <ul>
            {articles.map(article => {
              return <ArticleCard article={article} key={article.article_id} />;
            })}
          </ul>
        </div>
        <Router>
          <ArticleView path=":article_id" />
        </Router>
      </>
    );
  }

  fetchArticles = () => {
    getArticles().then(articles => {
      this.setState({ articles });
    });
  };
}

export default ArticlesList;

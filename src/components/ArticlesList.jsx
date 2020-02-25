import React, { Component } from "react";
import * as Api from "../api.js";
import ArticleCard from "./ArticleCard";
import { Router } from "@reach/router";
import ArticleView from "./ArticleView";
import Loading from "./Loading";

class ArticlesList extends Component {
  state = { articles: [], isLoading: true };

  componentDidMount() {
    this.fetchArticles();
  }
  render() {
    const { articles, isLoading } = this.state;
    return (
      <>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="container">
            <h1>Articles</h1>
            <ul>
              {articles.map(article => {
                return (
                  <ArticleCard article={article} key={article.article_id} />
                );
              })}
            </ul>
          </div>
        )}
        <Router>
          <ArticleView path=":article_id" />
        </Router>
      </>
    );
  }

  fetchArticles = () => {
    Api.getArticles().then(articles => {
      this.setState({ articles, isLoading: false });
    });
  };
}

export default ArticlesList;

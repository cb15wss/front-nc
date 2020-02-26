import React, { Component } from "react";
import * as Api from "../api.js";
import ArticleCard from "./ArticleCard";
import { Router } from "@reach/router";
import ArticleView from "./ArticleView";
import Loading from "./Loading";
//import SortDropdown from "./SortDropdown.jsx";
//import Select from "react-dropdown-select";

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true,
    category: undefined,
    filter: undefined,
    sort_by: undefined
  };

  componentDidMount() {
    this.fetchArticles();
  }
  render() {
    const { articles, isLoading, sort_by } = this.state;
    return (
      <>
        {console.log("articles params", articles)}
        {isLoading ? (
          <Loading />
        ) : (
          <div className="container">
            <h2>Articles</h2>
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

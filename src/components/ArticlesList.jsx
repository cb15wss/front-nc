import React, { Component } from "react";
import * as Api from "../api.js";
import ArticleCard from "./ArticleCard";
import { Router } from "@reach/router";
import ArticleView from "./ArticleView";
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";
import TopicsList from "./TopicsList";
import UsersList from "./UsersList";

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true,
    searchTerm: "",
    filter: undefined,
    category: undefined,
    sort_by: undefined,
    error: false,
    errorMessage: ""
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const { sort_by, category, filter } = this.state;
    const diffCategory = category !== prevState.category;
    const diffFilter = filter !== prevState.filter;
    const diffSort_by = sort_by !== prevState.sort_by;
    if (diffCategory || diffFilter || diffSort_by) {
      this.fetchArticles(sort_by, category, filter);
    }
  }

  render() {
    const {
      articles,
      isLoading,
      sort_by,
      filter,
      errorMessage,
      error
    } = this.state;
    return (
      <>
        {isLoading ? (
          <Loading />
        ) : error ? (
          <ErrorPage err={errorMessage} />
        ) : (
          <div className="container">
            <h2>Articles</h2>
            <div id="sidebar-title">
              <p id="filtered-by-text">
                <span id="category-text">{`${filter || "All"}`}</span> Articles
              </p>
              <select
                onChange={({ target: { value } }) =>
                  this.setState({ sort_by: value })
                }
              >
                <option>created_at</option>
                <option>votes</option>
                <option>comment_count</option>
              </select>
            </div>
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
          <TopicsList
            path="/topics"
            setFilter={this.setFilter}
            filter={filter}
          />
          <UsersList path="/users" setFilter={this.setFilter} filter={filter} />
          <ErrorPage default />
        </Router>
      </>
    );
  }
  setFilter = (category, filter) => {
    this.setState({ category, filter, isLoading: true });
  };

  fetchArticles = (sort_by, category, filter) => {
    Api.getArticles(sort_by, category, filter)
      .then(articles => {
        this.setState({ articles, isLoading: false, error: false });
      })
      .catch(err => {
        this.setState({ isLoading: false, error: true, errorMessage: err.msg });
      });
  };
}

export default ArticlesList;

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
    topic: undefined,
    sort_by: undefined,
    error: false,
    errorMessage: ""
  };

  fetchArticles = () => {
    const { sort_by, filter } = this.state;
    const { topic } = this.props;
    Api.getArticles(sort_by, topic, filter)
      .then(articles => {
        this.setState({ articles, isLoading: false, error: false });
      })
      .catch(err => {
        this.setState({ isLoading: false, error: true, errorMessage: err.msg });
      });
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const { sort_by, topic, filter } = this.state;

    const diffTopic = topic !== prevState.topic;
    const diffFilter = filter !== prevState.filter;
    const diffSort_by = sort_by !== prevState.sort_by;
    if (diffTopic || diffFilter || diffSort_by) {
      this.fetchArticles();
    }

    //  console.log("topic in articles list", this.props.topic);
  }
  render() {
    const { articles, isLoading, filter, errorMessage, error } = this.state;
    return (
      <>
        {isLoading ? (
          <Loading />
        ) : error ? (
          <ErrorPage err={errorMessage} />
        ) : (
          <div className="container">
            <div>
              <p>
                <span>{`${filter || "All "}`}</span>
                Articles
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
            <br />
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
            topic={this.props.topic}
          />
          <UsersList path="/users" setFilter={this.setFilter} filter={filter} />
        </Router>
      </>
    );
  }
  setFilter = filter => {
    this.setState({ filter, isLoading: true });
  };
}

export default ArticlesList;

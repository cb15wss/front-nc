import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Router } from "@reach/router";
import ArticlesList from "../src/components/ArticlesList";
import Home from "./components/Home";
import TopicsList from "./components/TopicsList";
import ArticleView from "./components/ArticleView";
import UsersList from "./components/UsersList";

import ErrorPage from "./components/ErrorPage";

class App extends React.Component {
  state = {
    username: "jessjelly"
  };
  render() {
    const { username } = this.state;
    return (
      <div className="container">
        <Header username={username} />
        <NavBar />
        <Router>
          <Home path="/" />
          <ArticlesList path="/articles" username={username} />
          <ArticleView path="/articles/:article_id" username={username} />
          <ArticlesList path="/articles/topic/:topic" />
          <TopicsList path="/topics" />
          <UsersList path="/users" />

          <ErrorPage default />
        </Router>
      </div>
    );
  }
}
export default App;

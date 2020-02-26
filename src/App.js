import React from "react";
//import logo from "./logo.svg";
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

function App() {
  return (
    <main className="container">
      <Header />
      <NavBar />
      <Router>
        <Home path="/" />
        <ArticlesList path="/articles" />
        <ArticleView path="/articles/:article_id" />
        <TopicsList path="/topics" />
        <UsersList path="/users" />
      </Router>
    </main>
  );
}

export default App;

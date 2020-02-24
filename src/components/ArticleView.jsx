import React, { Component } from "react";
import { getArticle } from "../api";

class ArticleView extends Component {
  state = { article: {}, comments: [], isLoading: true };

  componentDidUpdate(prevProps) {
    if (prevProps.article_id !== this.props.article_id) {
      this.fetchArticle();
    }
  }

  render() {
    const { article_id, title } = this.props;

    return (
      <div>
        {console.log("article view props", this.state.article)}
        <h1>Article view</h1>
        <h2>Article ID: {article_id}</h2>
        <h2>Article Title: {title}</h2>
      </div>
    );
  }

  fetchArticle = () => {
    getArticle(this.props.article_id).then(article => {
      //  console.log("article in fetch article", article);
      this.setState({ article, isLoading: false });
    });
  };
}

export default ArticleView;

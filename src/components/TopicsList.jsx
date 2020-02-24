import React, { Component } from "react";
import { getTopics } from "../api";
import TopicCard from "./TopicCard";

class TopicsList extends Component {
  state = {
    topics: [],
    isLoading: true
  };
  render() {
    const { topics } = this.state;

    console.log(topics);

    return (
      <>
        <div className="container">
          <TopicCard topics={topics} />
        </div>
      </>
    );
  }
  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    getTopics().then(topics => {
      console.log("fetch topics", topics);
      this.setState({ topics });
    });
  };
}

export default TopicsList;

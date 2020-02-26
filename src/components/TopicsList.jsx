import React, { Component } from "react";
import { getTopics } from "../api";
import TopicCard from "./TopicCard";
import Loading from "./Loading";

class TopicsList extends Component {
  state = {
    topics: [],
    isLoading: true
  };

  componentDidMount() {
    this.fetchTopics();
  }

  render() {
    //console.log("topics props", this.props);
    const { topics, isLoading } = this.state;
    //console.log(topics);
    if (isLoading) return <Loading />;
    return (
      <>
        <div className="container">
          <TopicCard topics={topics} />
        </div>
      </>
    );
  }

  fetchTopics = () => {
    getTopics().then(topics => {
      //console.log("fetch topics", topics);
      this.setState({ topics, isLoading: false });
    });
  };
}

export default TopicsList;

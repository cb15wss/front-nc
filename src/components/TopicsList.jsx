import React, { Component } from "react";
import * as Api from "../api";
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
    //console.log("topic in topics list", this.props);
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
    Api.getTopics().then(topics => {
      //console.log("fetch topics", topics);
      this.setState({ topics, isLoading: false });
    });
  };
}

export default TopicsList;

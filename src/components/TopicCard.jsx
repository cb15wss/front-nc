import React from "react";
import { Link } from "@reach/router";

const TopicCard = props => {
  const topics = props.topics;
  return (
    <>
      <div className="card mb-4">
        <div className="card-header">
          <h2>Topics</h2>
        </div>
        <ul className="list-group list-group-flush">
          {topics.map(topic => {
            return (
              <li key={topic.slug} className="list-group-item">
                <h3>{topic.slug}</h3> <p>Desciption: {topic.description}</p>
                <Link to={`/articles`}>Articles →</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TopicCard;

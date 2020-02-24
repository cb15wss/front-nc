import React from "react";

const TopicCard = props => {
  console.log("Topic card props", props.topics);
  const topics = props.topics;
  return (
    <>
      <div className="card mb-4">
        <div className="card-header">Topics</div>
        <ul className="list-group list-group-flush">
          {topics.map(topic => {
            return (
              <li key={topic.slug} className="list-group-item">
                {topic.slug}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TopicCard;

import React from "react";
import { Link } from "@reach/router";

const UserCard = props => {
  const { username, avatar_url, name } = props.user;
  return (
    <>
      <div className="container">
        <div className="card mb-4">
          <div className="card-header">
            {<Link to={`/users/${username}`}>{username}</Link>}
          </div>
          <div className="card-body">
            <h3>Full Name: {name}</h3>
            <div className="card-footer text-muted">View Profile</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;

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
            <img src={avatar_url} alt={name} />
            <h1>{name}</h1>
            <div className="card-footer text-muted">View Profile</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;

import React, { Component } from "react";

import { getUsers } from "../api";

import UserCard from "./UserCard";

class UsersList extends Component {
  state = {
    users: [],
    isLoading: true
  };

  componentDidMount() {
    this.fetchUsers();
  }
  render() {
    const { users, isLoading } = this.state;
    return (
      <>
        <div className="container">
          {console.log("users", users)}
          <h1>Users</h1>
          <ul>
            {users.map(user => {
              return <UserCard user={user} key={user.username} />;
            })}
          </ul>
        </div>
      </>
    );
  }

  fetchUsers = () => {
    getUsers().then(users => {
      this.setState({ users, isLoading: false });
    });
  };
}

export default UsersList;

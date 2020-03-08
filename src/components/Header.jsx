import React from "react";
import { Link } from "@reach/router";

const Header = props => {
  //console.log(props);
  return (
    <div className="container">
      <h1>
        <Link to="/" className="navbar-brand">
          <h1>Tina Times</h1>
        </Link>
      </h1>
      <p className="Header" align="right">
        You are logged in as: '{props.username}'
      </p>
    </div>
  );
};

export default Header;

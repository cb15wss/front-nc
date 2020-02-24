import React from "react";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <div className="container">
      <h1>
        <Link to="/" className="navbar-brand">
          <h1>Tina Times</h1>
        </Link>
      </h1>
    </div>
  );
};

export default Header;

import React from "react";
import { Link } from "@reach/router";

const Featured = () => {
  return (
    <div className="container">
      <Link to="/articles" className="navbar-brand">
        <h3 className="pb-3 mb-4 font-italic border-bottom">
          Go to All Articles...
        </h3>
      </Link>
    </div>
  );
};

export default Featured;

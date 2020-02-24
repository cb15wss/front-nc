import React from "react";
import Featured from "./Featured";

const Home = () => {
  return (
    <div className="container">
      <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <div className="col-md-6 px-0">
          <h1 className="display-4 font-italic">Featured Article</h1>
          <p className="lead my-3">
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what's most interesting in this post's
            contents.
          </p>
          <p className="lead mb-0">
            <a href="#" className="text-white font-weight-bold">
              Read More...
            </a>
          </p>
        </div>
      </div>
      <Featured />
    </div>
  );
};

export default Home;

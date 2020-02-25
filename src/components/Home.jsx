import React from "react";
import Featured from "./Featured";

const Home = () => {
  return (
    <div className="container">
      <div className="jumbotron p-5 p-md-5 text-white rounded bg-dark">
        <div className="col-md-10 px-0">
          <h1 className="display-4 font-italic">Featured Article</h1>
          <h2>CHRISTINE BANDA'S ‘OUTSTANDING’ HONOUR</h2>

          <p className="lead my-3">
            She was one of five students from universities in the UK to be named
            as a finalist in the Worshipful Company of Information Technologists
            (WCIT) Outstanding Information Technology Student Awards.
          </p>
          <p className="lead mb-0">
            <a
              href="https://www.theboltonnews.co.uk/news/17591365.first-class-result-
              for-single-mum-of-four-who-came-to-bolton-to-start-a-new-life/"
              className="text-white font-weight-bold"
            >
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

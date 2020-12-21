import React from "react";
// redux
import { connect } from "react-redux";

const Home = (props) => {
  return (
    <div>
      <h1>Hi from Home</h1>
    </div>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Home);

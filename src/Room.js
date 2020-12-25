import React, { useEffect } from "react";
// redux
import { connect } from "react-redux";
// redux actions
import { wsConnect, wsDisconnect } from "./actions";

const Room = (props) => {
  const { wsConnect, wsDisconnect } = props;

  useEffect(() => {
    wsConnect("ws://127.0.0.1:8080");

    return () => {
      wsDisconnect("ws://127.0.0.1:8080");
    };
  }, []);

  return (
    <div>
      <h1>Hi from Room</h1>
    </div>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    wsConnect: (payload) => dispatch(wsConnect(payload)),
    wsDisconnect: (payload) => dispatch(wsDisconnect(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Room);

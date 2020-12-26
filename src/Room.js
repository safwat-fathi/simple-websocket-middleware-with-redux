import React, { useState, useEffect } from "react";
// redux
import { connect } from "react-redux";
// redux actions
import { wsConnect, wsDisconnect, wsSend } from "./actions";

const Room = (props) => {
  const { wsConnect, wsDisconnect, wsSend } = props;

  const [inputVal, setInputVal] = useState("");

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inputVal);
    wsSend(
      JSON.stringify({
        type: "chatting",
        room: "CS500",
        payload: inputVal,
      })
    );
  };

  useEffect(() => {
    wsConnect("ws://127.0.0.1:8080");

    return () => {
      wsDisconnect();
    };
  }, []);

  return (
    <div>
      <h1>Hi from Room</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputVal} onChange={handleChange} />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    wsConnect: (payload) => dispatch(wsConnect(payload)),
    wsDisconnect: (payload) => dispatch(wsDisconnect(payload)),
    wsSend: (payload) => dispatch(wsSend(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Room);

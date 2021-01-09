import React, { useState, useEffect } from "react";

// redux
import { useSelector, useDispatch } from "react-redux";
// redux actions
import {
  connect,
  disconnect,
  send,
  newMessage,
  selectWebSocketMessageReceived,
  selectWebSocketState,
} from "./wsSlice";

const userID = Math.ceil(Math.random() * 10);

const Room = () => {
  const dispatch = useDispatch();

  const webSocketState = useSelector(selectWebSocketState);
  const webSocketMessage = useSelector(selectWebSocketMessageReceived);

  const [inputVal, setInputVal] = useState("");

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inputVal);

    dispatch(
      send(
        JSON.stringify({
          type: "chatting",
          room: "CS500",
          payload: inputVal,
        })
      )
    );
  };

  useEffect(() => {
    dispatch(
      connect({
        host: "ws://127.0.0.1:8080",
        data: { userID, userName: "Safwat" },
      })
    );

    return () => {
      dispatch(
        disconnect({ type: "closing", room: "CS500", payload: { userID } })
      );
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

export default Room;

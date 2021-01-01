import * as actions from "./actions";

let userID = 5000;

const socketMiddleware = ({ dispatch, getState }) => {
  let socket = null;

  const onOpen = (payload) => {
    dispatch(actions.wsConnected(payload));
    dispatch(
      actions.wsSend(
        JSON.stringify({
          type: "join",
          room: "CS500",
          payload: {
            userID: userID++,
            userName: "safwat",
          },
        })
      )
    );
  };

  const onClose = (payload) => {
    /* need to send userID to server */
    // dispatch(
    //   actions.wsSend(
    //     JSON.stringify({
    //       type: "closing",
    //       room: "CS500",
    //       payload: {
    //         userID: "111",
    //       },
    //     })
    //   )
    // );
    dispatch(actions.wsDisconnected(payload));
  };

  const onMessage = (payload) => {
    console.log("from onMessage");
    dispatch(actions.wsReceive(payload));
  };

  return (next) => (action) => {
    const { type, payload } = action;

    switch (type) {
      case "WS_CONNECT":
        if (socket !== null) {
          socket.close();
        }

        socket = new WebSocket(payload);

        socket.onopen = (e) => {
          console.log(e.type);
          onOpen(true);
        };

        socket.onclose = (e) => {
          console.log(e.type);
          onClose(false);
        };

        socket.onmessage = (e) => {
          console.log(e.type);
          onMessage(payload);
        };
        // cannot use socket.send()function here where websocket is still in CONNECTING state
        break;
      case "WS_DISCONNECT":
        if (socket !== null) {
          socket.close();
        }
        socket = null;
        break;
      case "WS_SEND":
        socket.send(payload);
        break;
      default:
        return next(action);
    }
  };
};

export default socketMiddleware;

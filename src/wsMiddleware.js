import * as actions from "./actions";

const socketMiddleware = ({ dispatch, getState }) => {
  let socket = null;

  const onOpen = (payload) => {
    dispatch(actions.wsConnected(payload));
  };

  const onClose = (payload) => {
    dispatch(actions.wsDisconnected(payload));
  };

  const onMessage = (payload) => {
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
        break;
      case "WS_DISCONNECT":
        if (socket !== null) {
          socket.close();
        }
        socket = null;
        break;
      case "WS_SEND":
        console.log(payload);
        socket.send(payload);
        break;
      default:
        return next(action);
    }
  };
};

export default socketMiddleware;

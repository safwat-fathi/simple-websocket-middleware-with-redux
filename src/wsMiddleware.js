import * as actions from "./actions";

const socketMiddleware = ({ dispatch, getState }) => {
  let socket = null;

  const onOpen = (payload) => {
    dispatch(actions.wsConnected(payload));
  };

  const onClose = (payload) => {
    dispatch(actions.wsDisconnected(payload));
  };

  return (next) => (action) => {
    const { type, host } = action;

    switch (type) {
      case "WS_CONNECT":
        if (socket !== null) {
          socket.close();
        }

        socket = new WebSocket(host);
        socket.onopen = (e) => {
          console.log(e);
          onOpen(true);
        };
        socket.onclose = (e) => {
          console.log(e);
          onClose(false);
        };
        break;
      case "WS_DISCONNECT":
        if (socket !== null) {
          socket.close();
        }
        socket = null;
        break;
      default:
        // console.log("the next action:", action);
        return next(action);
    }
  };
};

export default socketMiddleware;

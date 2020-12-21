import * as actions from "./actions";

const socketMiddleware = () => {
  let socket = null;

  const onOpen = (dispatch) => (event) => {
    console.log("websocket open", event.target.url);
    dispatch(actions.wsConnect(event.target.url));
  };

  const onClose = (dispatch) => () => {
    dispatch(actions.wsDisconnected());
  };

  return (next) => (action) => {
    const { type, host } = action;

    switch (type) {
      case "WS_CONNECT":
        if (socket !== null) {
          socket.close();
        }

        socket = new WebSocket(host);
        console.log("websocket opened");
        break;
      case "WS_DISCONNECT":
        if (socket !== null) {
          socket.close();
        }
        socket = null;
        console.log("websocket closed");
        break;
      default:
        console.log("the next action:", action);
        return next(action);
    }
  };
};

export default socketMiddleware;

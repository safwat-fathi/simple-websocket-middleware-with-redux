const initState = {
  websocketClient: null,
  connected: false,
  error: null,
};

export const reducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "WS_CONNECTED":
      console.log("websocket connected");
      return {
        ...state,
        connected: payload,
      };
    case "WS_DISCONNECTED":
      console.log("websocket disconnected");
      return {
        ...state,
        connected: false,
      };
    default:
      return state;
  }
};

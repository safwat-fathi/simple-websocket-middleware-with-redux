const initState = {
  websocketClient: null,
  connected: false,
  error: null,
};

export const reducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "WS_CONNECT":
      return {
        ...state,
        connected: true,
      };
    default:
      return state;
  }
};

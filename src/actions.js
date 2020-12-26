export const wsConnect = (payload) => ({ type: "WS_CONNECT", payload });
export const wsConnected = (payload) => ({ type: "WS_CONNECTED", payload });
export const wsDisconnect = () => ({ type: "WS_DISCONNECT" });
export const wsDisconnected = (payload) => ({
  type: "WS_DISCONNECTED",
  payload,
});
export const wsReceive = (payload) => {
  return {
    type: "WS_RECEIVE",
    payload,
  };
};
export const wsSend = (payload) => {
  return {
    type: "WS_SEND",
    payload,
  };
};

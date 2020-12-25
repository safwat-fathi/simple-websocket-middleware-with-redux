export const wsConnect = (host) => ({ type: "WS_CONNECT", host });
export const wsConnecting = (host) => ({ type: "WS_CONNECTING", host });
export const wsConnected = (payload) => ({ type: "WS_CONNECTED", payload });
export const wsDisconnect = (host) => ({ type: "WS_DISCONNECT", host });
export const wsDisconnected = (payload) => ({
  type: "WS_DISCONNECTED",
  payload,
});
// =======================================================
// =======================================================
// export const wsConnect = (payload) => {
// 	return dispatch => {
// 		dispatch(wsConnected(true))
// 	}
// };
// export const wsConnecting = (host) => ({ type: "WS_CONNECTING", host });
// export const wsConnected = (payload) => ({ type: "WS_CONNECTED", payload });
// export const wsDisconnect = (host) => ({ type: "WS_DISCONNECT", host });
// export const wsDisconnected = (host) => ({ type: "WS_DISCONNECTED", host });

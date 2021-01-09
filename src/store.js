import { configureStore } from "@reduxjs/toolkit";
// websocket reducer
import wsReducer from "./wsSlice";
// websocket middleware
import webSocketMiddleware from "./wsMiddleware";

export default configureStore({
  reducer: {
    websocket: wsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(webSocketMiddleware),
});

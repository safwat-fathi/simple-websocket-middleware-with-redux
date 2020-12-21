import React from "react";
import ReactDOM from "react-dom";
// redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
// redux actions
import { reducer } from "./reducer";
// redux ws middleware
import wsMiddleware from "./wsMiddleware";
// app componenets
import App from "./App";
// generic styles
import "./index.css";

// app middlewares
const middlewares = [thunk, wsMiddleware];
// app store
const store = createStore(reducer, applyMiddleware(...middlewares));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

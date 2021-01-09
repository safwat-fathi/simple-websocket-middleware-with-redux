import React from "react";
import ReactDOM from "react-dom";
// redux
import { Provider } from "react-redux";
// app store
import store from "./store";
// app componenets
import App from "./App";
// generic styles
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

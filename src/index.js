import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import asynsActions from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers/rootReducer";
import { getComponentDetails } from "./redux/actions/dashboard";

const store = createStore(rootReducer, applyMiddleware(asynsActions));

refreshToken();

export function refreshToken() {
  const nextTick = 120000;
  store.dispatch(getComponentDetails());
  setTimeout(() => {
    refreshToken();
  }, nextTick);
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

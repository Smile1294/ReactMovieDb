import React from "react";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import titleReducer from './features/MovieTitle';


var ReactDOM = require('react-dom/client');
const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore({
  reducer:{
    movie: titleReducer,
  }
});
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);

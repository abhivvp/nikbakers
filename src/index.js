// entry point for the application
import React from "react";
import ReactDom from "react-dom/client";

// importing methods and modules
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/Store";
import "./css/index.css"

// target element : it will target the root div of the html file
const target = document.querySelector("#root");

// creating an root element and rendering the component inside it
const root = ReactDom.createRoot(target);
root.render(
  // setting up the app routing
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

import React from "react";
import ReactDOM from "react-dom";
import "./common/reset.css";
import "./index.module.css";
import "@fortawesome/fontawesome-free/js/all.js";
import App from "./app";
import Firebase from "./service/firebase";

const FireBase = new Firebase();
ReactDOM.render(
  <React.StrictMode>
    <App FireBase={FireBase} />
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import "./common/reset.css";
import "./index.module.css";
import "@fortawesome/fontawesome-free/js/all.js";
import App from "./app";
import AuthService from "./service/auth_service";

const authService = new AuthService();
ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>,
  document.getElementById("root")
);

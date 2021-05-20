import React from "react";
import ReactDOM from "react-dom";
import "./common/reset.css";
import "./index.module.css";
import "@fortawesome/fontawesome-free/js/all.js";
import App from "./app";
import AuthService from "./service/auth_service";
import UploadCloudinary from "./service/image_upload/image_upload";

const authService = new AuthService();
const uploadCloudinary = new UploadCloudinary();
ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} uploadCloudinary={uploadCloudinary} />
  </React.StrictMode>,
  document.getElementById("root")
);

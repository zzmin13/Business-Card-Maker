import React from "react";
import ReactDOM from "react-dom";
import "./common/reset.css";
import "./index.module.css";
import "@fortawesome/fontawesome-free/js/all.js";
import App from "./app";
import AuthService from "./service/auth_service";
import ImageUploader from "./service/image_uploader/image_uploader";
import ImageInput from "./components/image_input/image_input";
import Database from "./service/database/database";

const authService = new AuthService();
const imageUploader = new ImageUploader();
const database = new Database();
const FileInput = (props) => {
  return <ImageInput {...props} imageUploader={imageUploader} />;
};

ReactDOM.render(
  <React.StrictMode>
    <App database={database} authService={authService} FileInput={FileInput} />
  </React.StrictMode>,
  document.getElementById("root")
);

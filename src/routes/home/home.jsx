import React from "react";
import Login from "../../components/login/login";
// import styles from "./home.module.css";

const Home = ({ FireBase }) => {
  return <Login FireBase={FireBase} />;
};

export default Home;

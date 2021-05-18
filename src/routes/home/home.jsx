import React, { memo } from "react";
import Login from "../../components/login/login";
import styles from "./home.module.css";

const Home = memo(({ authService }) => {
  console.log(`home`);
  return (
    <div className={styles.container}>
      <Login authService={authService} />
    </div>
  );
});

export default Home;

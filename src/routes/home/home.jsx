import React, { memo } from "react";
import Login from "../../components/login/login";
import styles from "./home.module.css";

const Home = memo(({ database, authService }) => {
  console.log(`home`);
  return (
    <div className={styles.container}>
      <Login authService={authService} database={database} />
    </div>
  );
});

export default Home;

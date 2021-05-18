import React, { memo } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./main.module.css";

const Main = memo((props) => {
  const { authService } = props;
  console.log(authService);
  const loginUser = authService.userExist();
  const avatarUrl = loginUser ? loginUser.photoURL : "";
  console.log(avatarUrl);
  console.log(`main`);
  return (
    <div className={styles.container}>
      <Header loginUser={loginUser} avatarUrl={avatarUrl} />
      <section className={styles.main}>메인 페이지 입니다.</section>
      <Footer />
    </div>
  );
});

export default Main;

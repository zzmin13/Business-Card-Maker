import React, { memo, useEffect } from "react";
import { useHistory } from "react-router";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./maker.module.css";

const Maker = memo((props) => {
  const { authService } = props;
  const history = useHistory();
  const loginUser = authService.userExist();
  const avatarUrl = loginUser ? loginUser.photoURL : "";
  console.log(avatarUrl);
  console.log(`main`);
  console.log(authService.userExist());
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });
  return (
    <div className={styles.container}>
      <Header
        authService={authService}
        loginUser={loginUser}
        avatarUrl={avatarUrl}
      />
      <section className={styles.main}>메인 페이지 입니다.</section>
      <Footer />
    </div>
  );
});

export default Maker;

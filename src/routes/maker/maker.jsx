import React, { memo, useEffect, useState } from "react";
import { useHistory } from "react-router";
import CardMaker from "../../components/card_maker/card_maker";
import CardPreview from "../../components/card_preview/card_preview";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import styles from "./maker.module.css";

const Maker = memo((props) => {
  const { authService } = props;
  const [loginUser, setLoginUser] = useState("");
  const history = useHistory();

  console.log(`main`);
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      } else {
        setLoginUser(authService.userExist());
      }
    });
  });
  return (
    <div className={styles.container}>
      <Header
        authService={authService}
        loginUser={loginUser}
        avatarUrl={loginUser.photoURL}
      />
      <div className={styles.main}>
        <CardMaker />
        <hr className={styles.line} />
        <CardPreview />
      </div>
      <Footer />
    </div>
  );
});

export default Maker;

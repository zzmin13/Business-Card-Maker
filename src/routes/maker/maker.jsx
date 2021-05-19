import React, { memo, useEffect, useState } from "react";
import { useHistory } from "react-router";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import styles from "./maker.module.css";
import Preview from "../../components/preview/preview";
import Editor from "../../components/editor/editor";

const Maker = memo((props) => {
  const { authService } = props;
  const [loginUser, setLoginUser] = useState("");
  const [cards, setCards] = useState([
    {
      name: "Ryan",
      company: "Kakao Friends",
      title: "Web Developer",
      email: "ryan@kakao.com",
      theme: "dark",
      id: "1",
    },
    {
      name: "Apeach",
      company: "Kakao Friends",
      title: "Designer",
      email: "apeach@kakao.com",
      theme: "light",
      id: "2",
    },
    {
      name: "Jordy",
      company: "Kakao Friends",
      title: "Product Manager",
      email: "jordy@kakao.com",
      theme: "colorful",
      id: "3",
    },
  ]);
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
        <Editor cards={cards} />
        <hr className={styles.line} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </div>
  );
});

export default Maker;

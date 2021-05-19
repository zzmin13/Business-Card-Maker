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
      company: "Kakao",
      title: "Web Developer",
      email: "ryan@kakao.com",
      theme: "dark",
      message: "Effort doesn't betray me.",
      fileURL: "/images/unnamed.jpg",
      id: "1",
    },
    {
      name: "Apeach",
      company: "Line",
      title: "Designer",
      email: "apeach@naver.com",
      theme: "light",
      message: "Don't give up on your dream.",
      fileURL: "/images/unnamed.jpg",
      id: "2",
    },
    {
      name: "Jordy",
      company: "Naver",
      title: "Product Manager",
      email: "jordy@naver.com",
      theme: "colorful",
      message: "Let's keep going!",
      fileURL: "/images/unnamed.jpg",
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

import React, { memo, useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import styles from "./maker.module.css";
import Preview from "../../components/preview/preview";
import Editor from "../../components/editor/editor";

const Maker = memo((props) => {
  const { authService } = props;
  const history = useHistory();
  const [loginUser, setLoginUser] = useState("");
  const [cards, setCards] = useState([
    {
      name: "Ryan",
      company: "Kakao",
      title: "Web Developer",
      email: "ryan@kakao.com",
      theme: "dark",
      message: "Effort doesn't betray me.",
      fileURL: null,
      id: "1",
    },
    {
      name: "Apeach",
      company: "Line",
      title: "Designer",
      email: "apeach@naver.com",
      theme: "light",
      message: "Don't give up on your dream.",
      fileURL: null,
      id: "2",
    },
    {
      name: "Jordy",
      company: "Naver",
      title: "Product Manager",
      email: "jordy@naver.com",
      theme: "colorful",
      message: "Let's keep going!",
      fileURL: null,
      id: "3",
    },
  ]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      } else {
        setLoginUser(authService.userExist());
      }
    });
  });

  const addCard = useCallback((newCard) => {
    setCards([...cards, newCard]);
  }, []);

  const onDelete = useCallback(
    (id) => {
      const newCards = cards.filter((card) => {
        return card.id !== id;
      });
      setCards(newCards);
    },
    [cards]
  );

  console.log(`main`);
  return (
    <div className={styles.container}>
      <Header
        authService={authService}
        loginUser={loginUser}
        avatarUrl={loginUser.photoURL}
      />
      <div className={styles.main}>
        <Editor cards={cards} addCard={addCard} onDelete={onDelete} />
        <hr className={styles.line} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </div>
  );
});

export default Maker;

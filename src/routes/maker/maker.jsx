import React, { memo, useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import styles from "./maker.module.css";
import Preview from "../../components/preview/preview";
import Editor from "../../components/editor/editor";

const Maker = memo((props) => {
  const { authService, uploadCloudinary } = props;
  const history = useHistory();
  const [cards, setCards] = useState({
    1: {
      name: "Ryan",
      company: "Kakao",
      title: "Web Developer",
      email: "ryan@kakao.com",
      theme: "dark",
      message: "Effort doesn't betray me.",
      fileURL: null,
      fileName: null,
      id: "1",
    },
    2: {
      name: "Apeach",
      company: "Line",
      title: "Designer",
      email: "apeach@naver.com",
      theme: "light",
      message: "Don't give up on your dream.",
      fileURL: null,
      fileName: null,
      id: "2",
    },
    3: {
      name: "Jordy",
      company: "Naver",
      title: "Product Manager",
      email: "jordy@naver.com",
      theme: "colorful",
      message: "Let's keep going!",
      fileURL: null,
      fileName: null,
      id: "3",
    },
  });

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const addCard = useCallback(
    (newCard) => {
      setCards({ ...cards, [newCard.id]: newCard });
    },
    [cards]
  );

  const deleteCard = useCallback((id) => {
    setCards((cards) => {
      const changedCards = { ...cards };
      delete changedCards[id];
      return changedCards;
    });
  }, []);

  const updateCard = useCallback((updatedCard) => {
    setCards((cards) => {
      const changedCards = { ...cards };
      changedCards[updatedCard.id] = updatedCard;
      return changedCards;
    });
  }, []);

  console.log(`maker`);
  return (
    <div className={styles.container}>
      <Header authService={authService} />
      <div className={styles.main}>
        <Editor
          cards={cards}
          addCard={addCard}
          deleteCard={deleteCard}
          updateCard={updateCard}
          uploadCloudinary={uploadCloudinary}
        />
        <hr className={styles.line} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </div>
  );
});

export default Maker;

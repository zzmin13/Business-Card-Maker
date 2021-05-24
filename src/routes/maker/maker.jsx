import React, { memo, useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import styles from "./maker.module.css";
import Preview from "../../components/preview/preview";
import Editor from "../../components/editor/editor";

const Maker = memo((props) => {
  const { database, authService, FileInput } = props;
  const history = useHistory();
  const {
    location: {
      state: { uid, avatar },
    },
  } = history;
  const [cards, setCards] = useState({});

  const showMyCards = (loadedcards) => {
    const newCards = { ...loadedcards };
    setCards(newCards);
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
    database.loadMyCards(uid, showMyCards);
  }, []);

  const addCard = (newCard) => {
    setCards({ ...cards, [newCard.id]: newCard });
  };

  const deleteCard = useCallback((id) => {
    setCards((cards) => {
      const changedCards = { ...cards };
      delete changedCards[id];
      return changedCards;
    });
  }, []);

  const updateCard = (updatedCard) => {
    setCards((cards) => {
      const changedCards = { ...cards };
      changedCards[updatedCard.id] = updatedCard;
      return changedCards;
    });
    database.updateUserData(uid, updatedCard);
  };

  console.log(`maker`);
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <Header avatar={avatar} authService={authService} />
        <div className={styles.main}>
          <Editor
            FileInput={FileInput}
            cards={cards}
            addCard={addCard}
            deleteCard={deleteCard}
            updateCard={updateCard}
          />
          <hr className={styles.line} />
          <Preview cards={cards} />
        </div>
        <Footer />
      </div>
    </div>
  );
});

export default Maker;

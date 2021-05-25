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
      state,
      state: { uid, avatar },
    },
  } = history;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(state && uid);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(uid);
      } else {
        history.push("/");
      }
    });
  }, [authService, history, uid]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = database.syncCards(userId, (cards) => {
      setCards(cards);
      if (setLoading) {
        setLoading(false);
      }
    });
    return () => {
      stopSync();
    };
  }, [userId, database]);

  const addCard = useCallback(
    (newCard) => {
      setCards({ ...cards, [newCard.id]: newCard });
      database.AddUserCard(uid, newCard);
    },
    [cards, database, uid]
  );

  const deleteCard = useCallback(
    (id) => {
      setCards((cards) => {
        const changedCards = { ...cards };
        delete changedCards[id];
        return changedCards;
      });
      database.DeleteUserCard(uid, id);
    },
    [database, uid]
  );

  const updateCard = useCallback(
    (updatedCard) => {
      setCards((cards) => {
        const changedCards = { ...cards };
        changedCards[updatedCard.id] = updatedCard;
        return changedCards;
      });
      database.updateUserCard(uid, updatedCard);
    },
    [database, uid]
  );

  console.log(`maker`);
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <Header avatar={avatar} authService={authService} />
        <div className={styles.main}>
          {isLoading ? (
            <div className={styles.loading}>
              <h1>Loading...</h1>
            </div>
          ) : (
            <>
              <Editor
                FileInput={FileInput}
                cards={cards}
                addCard={addCard}
                deleteCard={deleteCard}
                updateCard={updateCard}
              />
              <hr className={styles.line} />
              <Preview cards={cards} />
            </>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
});

export default Maker;

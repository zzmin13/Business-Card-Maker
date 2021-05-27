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
      // state: { uid, avatar },
    },
  } = history;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(state && state.uid);
  const [avatar, setAvatar] = useState(state && state.avatar);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
        setAvatar(user.photoURL);
      } else {
        history.push("/");
      }
    });
  }, [authService, history]);

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
      database.AddUserCard(userId, newCard);
    },
    [cards, database, userId]
  );

  const deleteCard = useCallback(
    (id) => {
      setCards((cards) => {
        const changedCards = { ...cards };
        delete changedCards[id];
        return changedCards;
      });
      database.DeleteUserCard(userId, id);
    },
    [database, userId]
  );

  const updateCard = useCallback(
    (updatedCard) => {
      setCards((cards) => {
        const changedCards = { ...cards };
        changedCards[updatedCard.id] = updatedCard;
        return changedCards;
      });
      database.updateUserCard(userId, updatedCard);
    },
    [database, userId]
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

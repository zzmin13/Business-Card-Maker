import React, { memo } from "react";
import AddForm from "../addForm/addForm";
import EditForm from "../editForm/editForm";
import styles from "./editor.module.css";

const Editor = memo(({ FileInput, cards, addCard, deleteCard, updateCard }) => {
  console.log(`editor`);
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Card Maker</h1>
      <div className={styles.form}>
        {Object.keys(cards).map((key) => {
          return (
            <EditForm
              FileInput={FileInput}
              key={key}
              card={cards[key]}
              deleteCard={deleteCard}
              updateCard={updateCard}
            />
          );
        })}
        <AddForm FileInput={FileInput} addCard={addCard} />
      </div>
    </section>
  );
});

export default Editor;

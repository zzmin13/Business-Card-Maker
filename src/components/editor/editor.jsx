import React from "react";
import AddForm from "../addForm/addForm";
import EditForm from "../editForm/editForm";
import styles from "./editor.module.css";

const Editor = ({
  cards,
  addCard,
  deleteCard,
  updateCard,
  uploadCloudinary,
}) => {
  console.log(`editor`);
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Card Maker</h1>
      <div className={styles.form}>
        {Object.keys(cards).map((key) => {
          return (
            <EditForm
              key={key}
              card={cards[key]}
              deleteCard={deleteCard}
              updateCard={updateCard}
              uploadCloudinary={uploadCloudinary}
            />
          );
        })}
      </div>
      <AddForm addCard={addCard} />
    </section>
  );
};

export default Editor;

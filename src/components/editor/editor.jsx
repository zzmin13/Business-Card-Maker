import React from "react";
import AddForm from "../addForm/addForm";
import EditForm from "../editForm/editForm";
import styles from "./editor.module.css";

const Editor = ({ cards, addCard }) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Card Maker</h1>
      <div className={styles.form}>
        {cards.map((card) => {
          return <EditForm key={card.id} card={card} />;
        })}
      </div>
      <AddForm addCard={addCard} />
    </section>
  );
};

export default Editor;

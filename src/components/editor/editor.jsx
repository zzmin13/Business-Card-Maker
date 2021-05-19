import React from "react";
import styles from "./editor.module.css";
import CardForm from "../cardForm/cardForm";

const Editor = ({ cards }) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Card Maker</h1>
      <div className={styles.form}>
        {cards.map((card) => {
          return <CardForm key={card.id} card={card} />;
        })}
      </div>
    </section>
  );
};

export default Editor;

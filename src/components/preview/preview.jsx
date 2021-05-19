import React from "react";
import Card from "../card/card";
import styles from "./preview.module.css";

const Preview = (props) => {
  const { cards } = props;
  return (
    <section className={styles.container}>
      <span className={styles.title}>Card Preview</span>
      <ul className={styles.cards}>
        {cards.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </ul>
    </section>
  );
};

export default Preview;

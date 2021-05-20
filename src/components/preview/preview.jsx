import React from "react";
import Card from "../card/card";
import styles from "./preview.module.css";

const Preview = (props) => {
  const { cards } = props;
  console.log(`preview`);
  return (
    <section className={styles.container}>
      <span className={styles.title}>Card Preview</span>
      <ul className={styles.cards}>
        {Object.keys(cards).map((key) => {
          return <Card key={key} card={cards[key]} />;
        })}
      </ul>
    </section>
  );
};

export default Preview;

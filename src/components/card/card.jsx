import React from "react";
import styles from "./card.module.css";
const Card = ({ card: { name, company, title, email, theme } }) => {
  let themeType;
  if (theme === "light") {
    themeType = styles.light;
  } else if (theme === "dark") {
    themeType = styles.dark;
  } else if (theme === "colorful") {
    themeType = styles.colorful;
  }
  return (
    <div className={`${styles.card_container} ${themeType}`}>
      <img
        className={styles.image}
        src="/images/unnamed.jpg"
        alt="card_image"
      />
      <div className={styles.metadata}>
        <h1 className={styles.name}>{name}</h1>
        <h1 className={styles.company}>{company}</h1>
        <hr className={`${styles.line} ${themeType}`} />
        <h1 className={styles.title}>{title}</h1>
        <h1 className={styles.email}>{email}</h1>
      </div>
    </div>
  );
};

export default Card;

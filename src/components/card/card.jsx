import React from "react";
import styles from "./card.module.css";
const Card = ({
  card: { name, company, title, email, theme, message, fileURL },
}) => {
  let themeType;
  if (theme === "light") {
    themeType = styles.light;
  } else if (theme === "dark") {
    themeType = styles.dark;
  } else if (theme === "colorful") {
    themeType = styles.colorful;
  }
  return (
    <li className={`${styles.card_container} ${themeType}`}>
      <img
        className={styles.image}
        src={fileURL ? fileURL : "/images/unnamed.jpg"}
        alt="card_image"
      />
      <div className={styles.metadata}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{company}</p>
        <hr className={`${styles.line} ${themeType}`} />
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );
};

export default Card;

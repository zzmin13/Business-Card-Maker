import React from "react";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img src="/favicon.ico" alt="icon" className={styles.icon} />
      <h3 className={styles.title}>BUSINESS CARD MAKER</h3>
    </header>
  );
};

export default Header;

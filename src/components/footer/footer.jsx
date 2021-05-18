import React, { memo } from "react";
import styles from "./footer.module.css";

const Footer = memo((props) => {
  console.log(`footer`);
  return (
    <footer className={styles.footer}>
      <h3 className={styles.title}>Made by nyang-in</h3>
    </footer>
  );
});

export default Footer;

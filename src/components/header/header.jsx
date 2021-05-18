import React, { memo, useState } from "react";
import styles from "./header.module.css";

const Header = memo((props) => {
  const { loginUser, avatarUrl } = props;
  const [display, setDisplay] = useState(styles.invisible);
  const showLogoutBtn = () => {
    if (display === styles.visible) {
      setDisplay(styles.invisible);
    } else {
      setDisplay(styles.visible);
    }
  };
  console.log(`header`);
  return (
    <header className={styles.header}>
      <img src="/favicon.ico" alt="icon" className={styles.icon} />
      <h3 className={styles.title}>BUSINESS CARD MAKER</h3>
      {loginUser ? (
        <>
          <img
            src={avatarUrl}
            alt="profile"
            className={styles.profile}
            onClick={showLogoutBtn}
          />
          <button className={`${styles.logout_button} ${display}`}>
            Logout
          </button>
        </>
      ) : null}
    </header>
  );
});

export default Header;

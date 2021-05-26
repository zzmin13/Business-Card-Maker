import React, { memo, useState } from "react";
import styles from "./header.module.css";

const Header = memo((props) => {
  const { avatar, authService } = props;
  const [avatarURL] = useState(avatar ? avatar : null);
  const [display, setDisplay] = useState(styles.invisible);

  const showLogoutBtn = () => {
    if (display === styles.visible) {
      setDisplay(styles.invisible);
    } else {
      setDisplay(styles.visible);
    }
  };
  const handleLogout = () => {
    authService.logout();
  };
  console.log(`header`);
  console.log(avatarURL);

  return (
    <header className={styles.header}>
      <img src="/favicon.ico" alt="icon" className={styles.icon} />
      <h3 className={styles.title}>BUSINESS CARD MAKER</h3>
      {avatarURL ? (
        <>
          <img
            src={avatarURL}
            alt="profile"
            className={styles.profile}
            onClick={showLogoutBtn}
          />
          <button
            className={`${styles.logout_button} ${display}`}
            onClick={handleLogout}
          >
            Logout
          </button>
        </>
      ) : null}
    </header>
  );
});

export default Header;

import React, { memo, useEffect, useState } from "react";
import styles from "./header.module.css";

const Header = memo((props) => {
  const { authService } = props;
  const [loginUser, setLoginUser] = useState();
  const [display, setDisplay] = useState(styles.invisible);
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setLoginUser(authService.userExist());
      }
    });
    return () => {
      setLoginUser(null);
    };
  }, []);
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

  return (
    <header className={styles.header}>
      <img src="/favicon.ico" alt="icon" className={styles.icon} />
      <h3 className={styles.title}>BUSINESS CARD MAKER</h3>
      {loginUser ? (
        <>
          <img
            src={loginUser.photoURL}
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

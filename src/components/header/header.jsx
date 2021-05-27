import React, { memo, useEffect, useState } from "react";
import styles from "./header.module.css";

const Header = memo((props) => {
  const { authService } = props;
  const [avatarURL, setAvatarURL] = useState(null);
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
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setAvatarURL(
          user.photoURL
            ? user.photoURL
            : "https://res.cloudinary.com/dgdkgkx1k/image/upload/v1621576762/xznnmjj9tfodjcbypkc9.jpg"
        );
      }
    });
    return () => {
      setAvatarURL(null);
    };
  }, [authService]);

  console.log(`header`);
  return (
    <header className={styles.header}>
      <img
        src="https://res.cloudinary.com/dgdkgkx1k/image/upload/v1622017140/favicon_tebnq5.ico"
        alt="icon"
        className={styles.icon}
      />
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

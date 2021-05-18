import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ FireBase }) => {
  const handleOAuthLogin = (event) => {
    FireBase.login(event.target.name);
  };
  return (
    <div className={styles.container}>
      <div className={styles.home}>
        <Header />
        <div className={styles.loginBox}>
          <h1 className={styles.title}>LOGIN</h1>
          <form className={styles.form}>
            <input
              className={styles.input}
              type="text"
              placeholder="id"
              name="id"
            />
            <input
              className={styles.input}
              type="password"
              placeholder="password"
              name="password"
            />
            <button
              className={`${styles.loginButton} ${styles.button}`}
              type="submit"
            >
              Login
            </button>
          </form>
          <div className={styles.lineBox}>
            <hr className={styles.line} />
            <span className={styles.or}>OR</span>
            <hr className={styles.line} />
          </div>
          <button
            type="button"
            name="GithubAuth"
            className={`${styles.socialLogin} ${styles.button} ${styles.github}`}
            onClick={handleOAuthLogin}
          >
            <i className={`fab fa-github ${styles.socialIcon}`}></i>
            Continue with Github →
          </button>
          <button
            type="button"
            name="GoogleAuth"
            className={`${styles.socialLogin} ${styles.button} ${styles.google}`}
            onClick={handleOAuthLogin}
          >
            <i className={`fab fa-google ${styles.socialIcon}`}></i>
            Continue with Google →
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;

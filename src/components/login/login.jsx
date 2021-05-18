import React, { memo } from "react";
import { useHistory } from "react-router";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = memo(({ authService }) => {
  const history = useHistory();
  const handleOAuthLogin = (event) => {
    authService
      .login(event.target.name) //
      .then(() => {
        history.push("/app");
      });
  };
  console.log(`login`);
  return (
    <section className={styles.home}>
      <Header />
      <section className={styles.loginBox}>
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
          name="Github"
          className={`${styles.socialLogin} ${styles.button} ${styles.github}`}
          onClick={handleOAuthLogin}
        >
          <i className={`fab fa-github ${styles.socialIcon}`}></i>
          Continue with Github →
        </button>
        <button
          type="button"
          name="Google"
          className={`${styles.socialLogin} ${styles.button} ${styles.google}`}
          onClick={handleOAuthLogin}
        >
          <i className={`fab fa-google ${styles.socialIcon}`}></i>
          Continue with Google →
        </button>
      </section>
      <Footer />
    </section>
  );
});

export default Login;

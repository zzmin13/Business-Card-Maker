import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import styles from "./home.module.css";

const Home = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.home}>
        <Header />
        <div className={styles.loginBox}>
          <h1 className={styles.title}>LOGIN</h1>
          <form method="post" className={styles.form}>
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
            name="githubLoginBtn"
            className={`${styles.socialLogin} ${styles.button} ${styles.github}`}
          >
            <i className={`fab fa-github ${styles.socialIcon}`}></i>
            Continue with Github
          </button>
          <button
            type="button"
            name="kakaoLoginBtn"
            className={`${styles.socialLogin} ${styles.button} ${styles.kakao}`}
          >
            <i className={`fas fa-comments ${styles.socialIcon}`}></i>
            Continue with Kakao
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;

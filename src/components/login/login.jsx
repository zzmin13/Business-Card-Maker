import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ database, authService }) => {
  const history = useHistory();
  const goToMaker = (userId, photoURL) => {
    history.push({
      pathname: "/maker",
      state: {
        uid: userId,
        avatar: photoURL,
      },
    });
  };
  const handleOAuthLogin = async (event) => {
    const data = await authService.login(event.currentTarget.name);
    const user = await data.user;
    const isUserExist = await database.isUser(user.uid);
    console.log(isUserExist);
    if (!isUserExist) {
      // user가 없다면 데이터베이스에 등록
      database.registerNewUser(user.uid, user.email, user.photoURL);
    }
    // 로그인할 때 데이터베이스에서 회원 정보 추가하는 부분 여기다가 옮기기
    goToMaker(user.uid, user.photoURL);
  };
  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.uid, user.photoURL);
    });
  });
  console.log(`login`);
  return (
    <section className={styles.home}>
      <Header authService={authService} />
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
          <div className={styles.textBox}>
            <Link
              to={{
                pathname: "/join",
              }}
            >
              <span className={styles.join}>Join</span>
            </Link>
            <Link
              to={{
                pathname: "/find",
              }}
            >
              <span className={styles.forgot}>Forgot your ID / Password?</span>
            </Link>
          </div>
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
};

export default Login;

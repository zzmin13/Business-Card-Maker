import React, { useRef } from "react";
import styles from "./join.module.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const Join = ({ authService, database }) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const password2Ref = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const userInfo = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password2: password2Ref.current.value,
    };
    if (userInfo.password !== userInfo.password2) {
      alert("비밀번호가 일치하지 않습니다.");
    } else {
      authService.createUser(userInfo.name, userInfo.email, userInfo.password);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.join}>
        <Header />
        <form onSubmit={handleSubmit} className={styles.form}>
          <h1 className={styles.title}>Join Business Card Maker</h1>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="name"
            required={true}
            ref={nameRef}
          />
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="email"
            required={true}
            ref={emailRef}
          />
          <input
            className={styles.input}
            type="password"
            name="password"
            placeholder="password"
            required={true}
            ref={passwordRef}
          />
          <input
            className={styles.input}
            type="password"
            name="password2"
            placeholder="verify password"
            required={true}
            ref={password2Ref}
          />
          <button
            type="submit"
            onSubmit={handleSubmit}
            className={styles.button}
          >
            join
          </button>
        </form>
        <Footer />
      </div>
    </div>
  );
};

export default Join;

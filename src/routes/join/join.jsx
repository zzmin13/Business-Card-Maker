import React, { useRef } from "react";
import styles from "./join.module.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { useHistory } from "react-router";

const Join = ({ authService, database }) => {
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();
  const password2Ref = useRef();
  const passwordCheck = (password) => {
    //6 ~ 20 영문, 최소 1개 이상의 숫자 혹은 특수문자를 포함해야 한다.
    const passwordRules = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/;
    return passwordRules.test(password);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const userInfo = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password2: password2Ref.current.value,
    };
    if (userInfo.password !== userInfo.password2) {
      alert("비밀번호가 일치하지 않습니다.");
    } else {
      // 비밀번호가 일치 한다면
      if (passwordCheck(userInfo.password)) {
        try {
          const response = await authService.createUser(
            userInfo.email,
            userInfo.password
          );
          if (response !== undefined) {
            const isUserExist = await database.isUser(response.user.uid);
            if (!isUserExist) {
              try {
                database.registerNewUser(
                  response.user.uid,
                  response.user.email,
                  response.user.photoURL
                    ? response.user.photoURL
                    : "https://res.cloudinary.com/dgdkgkx1k/image/upload/v1621576762/xznnmjj9tfodjcbypkc9.jpg"
                );
                history.push({
                  pathname: "/maker",
                  state: {
                    uid: response.user.uid,
                    avatar: response.user.photoURL
                      ? response.user.photoURL
                      : "https://res.cloudinary.com/dgdkgkx1k/image/upload/v1621576762/xznnmjj9tfodjcbypkc9.jpg",
                  },
                });
              } catch (error) {
                console.log(error);
              }
            }
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        alert(
          "비밀번호는 6~20자 사이의 영문, 숫자, 특수문자를 포함하여야 합니다."
        );
      }
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.join}>
        <Header authService={authService} />
        <form onSubmit={handleSubmit} className={styles.form}>
          <h1 className={styles.title}>Join Business Card Maker</h1>
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

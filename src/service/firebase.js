import firebase from "firebase";

class Firebase {
  login(provider) {
    if (provider === "GithubAuth") {
      const provider = new firebase.auth.GithubAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          console.log(`로그인에 성공하였습니다.`);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (provider === "GoogleAuth") {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          console.log(`로그인에 성공하였습니다.`);
          return result;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
}

export default Firebase;

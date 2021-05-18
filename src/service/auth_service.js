import firebase from "firebase";

class AuthService {
  login(providerName) {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebase
      .auth()
      .signInWithPopup(authProvider)
      .catch((error) => {
        console.log(error);
      });
  }
  userExist() {
    const user = firebase.auth().currentUser;
    if (user) {
      return user;
    } else {
      return null;
    }
  }
}

export default AuthService;

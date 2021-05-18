import firebase from "firebase";

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebase
      .auth()
      .signInWithPopup(authProvider)
      .catch((error) => {
        console.log(error);
      });
  }
  logout() {
    return firebase.auth().signOut();
  }
  onAuthChange(onUserChanged) {
    firebase.auth().onAuthStateChanged((user) => {
      onUserChanged(user);
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

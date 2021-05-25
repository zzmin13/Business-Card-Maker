import { firebaseAuth, googleProvider, githubProvider } from "./firebaseStart";

class AuthService {
  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider).catch((error) => {
      console.log(error);
    });
  }
  logout() {
    return firebaseAuth.signOut();
  }
  onAuthChange(onUserChanged) {
    firebaseAuth.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }
  userExist() {
    const user = firebaseAuth.currentUser;
    if (user) {
      return user;
    } else {
      return null;
    }
  }
  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return googleProvider;
      case "Github":
        return githubProvider;
      default:
        throw new Error(`not supported provider : ${providerName}`);
    }
  }
}

export default AuthService;

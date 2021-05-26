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
  createUser(email, password) {
    return firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/weak-password") {
          alert("비밀번호는 6자 이상이어야 합니다.");
        } else if (errorCode === "auth/email-already-in-use") {
          alert("이미 존재하는 이메일 입니다.");
        } else if (errorCode === "auth/invalid-email") {
          alert("이메일이 유효하지 않습니다.");
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  }
  localLogin(email, password) {
    return firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          alert("비밀번호 오류입니다.");
        } else if (error.code === "auth/invalid-email") {
          alert("유효하지 않은 이메일 형식입니다.");
        } else if (error.code === "auth/user-not-found") {
          alert("존재하지 않는 이메일 입니다.");
        }
      });
  }
}

export default AuthService;

import firebase from "firebase";
class Database {
  isUser(uid) {
    const dbRef = firebase.database().ref();
    return dbRef
      .child("users")
      .child(uid)
      .get()
      .then((result) => {
        if (result.exists()) {
          return true;
        } else {
          return false;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  writeUserData(uid, email, avatar) {
    firebase
      .database()
      .ref(`users/${uid}`)
      .set({
        email,
        avatar,
        cards: {
          1: {
            name: "Chunsik",
            company: "Kakao",
            title: "Web Developer",
            email: "chunsik@kakao.com",
            theme: "dark",
            message: "Effort doesn't betray me.",
            fileURL:
              "http://res.cloudinary.com/dgdkgkx1k/image/upload/v1621667546/f2hocb54u6yn92aqis3k.jpg",
            fileName: "chunsik",
            id: "1",
          },
          2: {
            name: "Apeach",
            company: "Line",
            title: "Designer",
            email: "apeach@naver.com",
            theme: "light",
            message: "Don't give up on your dream.",
            fileURL:
              "http://res.cloudinary.com/dgdkgkx1k/image/upload/v1621667692/axliuzjpeopmsxwz8j9l.jpg",
            fileName: "little_apeach",
            id: "2",
          },
          3: {
            name: "Jordy",
            company: "Naver",
            title: "Product Manager",
            email: "jordy@naver.com",
            theme: "colorful",
            message: "Let's keep going!",
            fileURL:
              "http://res.cloudinary.com/dgdkgkx1k/image/upload/v1621667841/ledhkeyim4en5n5cices.jpg",
            fileName: "jordy",
            id: "3",
          },
        },
      });
    console.log(`database.writeUserData 실행되었습니다.`);
  }
  loadMyCards(uid, showMyCards) {
    firebase
      .database()
      .ref(`/users/${uid}/cards`)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          showMyCards(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  updateUserData(uid, updatedCard) {
    const updates = {};
    updates[`/users/${uid}/cards/${updatedCard.id}`] = updatedCard;
    return firebase.database().ref().update(updates);
  }
}

export default Database;

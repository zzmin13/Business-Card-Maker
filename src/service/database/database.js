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

  // registerNewUser: 새 유저를 등록하는 함수
  registerNewUser(uid, email, avatar) {
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
  // syncCards : 변경 사항이 있을 때마다 데이터를 받아오는 함수
  syncCards(userId, onUpdate) {
    console.log(`syncCards 실행됨`);
    const ref = firebase.database().ref(`/users/${userId}/cards`);
    ref.on("value", (snapshot) => {
      const value = snapshot.val();
      if (value) {
        onUpdate(value);
      }
    });
    return () => ref.off();
  }
  updateUserCard(uid, updatedCard) {
    const updates = {};
    updates[`/users/${uid}/cards/${updatedCard.id}`] = updatedCard;
    return firebase.database().ref().update(updates);
  }
  AddUserCard(uid, newCard) {
    firebase //
      .database() //
      .ref(`users/${uid}/cards/${newCard.id}`) //
      .set(newCard);
    console.log(`AddUserData 실행되었습니다.`);
  }
  DeleteUserCard(uid, deleteCardId) {
    firebase //
      .database() //
      .ref(`users/${uid}/cards/${deleteCardId}`) //
      .remove();
    console.log(
      `DeleteUserData - [${uid}] 유저의 [${deleteCardId}] 카드가 삭제됨`
    );
  }
}

export default Database;

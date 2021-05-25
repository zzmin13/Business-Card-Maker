import { firebaseDatabase } from "../firebaseStart";
class Database {
  isUser(uid) {
    const dbRef = firebaseDatabase.ref();
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
    firebaseDatabase.ref(`users/${uid}`).set({
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
  }
  // syncCards : 변경 사항이 있을 때마다 데이터를 받아오는 함수
  syncCards(userId, onUpdate) {
    const ref = firebaseDatabase.ref(`/users/${userId}/cards`);
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
    return firebaseDatabase.ref().update(updates);
  }
  AddUserCard(uid, newCard) {
    firebaseDatabase //
      .ref(`users/${uid}/cards/${newCard.id}`) //
      .set(newCard);
  }
  DeleteUserCard(uid, deleteCardId) {
    firebaseDatabase //
      .ref(`users/${uid}/cards/${deleteCardId}`) //
      .remove();
  }
}

export default Database;

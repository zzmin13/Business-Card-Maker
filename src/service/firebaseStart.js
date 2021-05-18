import firebase from "firebase";
const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;
const PROJECT_ID = process.env.REACT_APP_FIREBASE_PROJECT_ID;
const APP_ID = process.env.REACT_APP_FIREBASE_APP_ID;
const firebaseConfig = {
  apiKey: `${API_KEY}`,
  authDomain: `${PROJECT_ID}.firebaseapp.com`,
  projectId: `${PROJECT_ID}`,
  messagingSenderId: "506952040370",
  appId: `${APP_ID}`,
  measurementId: "G-PGB7ZS3L6Y",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

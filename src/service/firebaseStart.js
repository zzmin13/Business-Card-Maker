import firebase from "firebase";
const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;
const PROJECT_ID = process.env.REACT_APP_FIREBASE_PROJECT_ID;
const APP_ID = process.env.REACT_APP_FIREBASE_APP_ID;
const firebaseConfig = {
  apiKey: `${API_KEY}`,
  authDomain: `${PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${PROJECT_ID}-default-rtdb.firebaseio.com/`,
  projectId: `${PROJECT_ID}`,
  appId: `${APP_ID}`,
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

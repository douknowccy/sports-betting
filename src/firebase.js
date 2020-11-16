// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAEAJ5U-rQC2x6QGy19CmU7hFaqdHwrncQ",
  authDomain: "sport-betting-6e51f.firebaseapp.com",
  databaseURL: "https://sport-betting-6e51f.firebaseio.com",
  projectId: "sport-betting-6e51f",
  storageBucket: "sport-betting-6e51f.appspot.com",
  messagingSenderId: "434380709776",
  appId: "1:434380709776:web:89d513f1a6c56e43641d15",
  measurementId: "G-FV0H4KQ58M",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

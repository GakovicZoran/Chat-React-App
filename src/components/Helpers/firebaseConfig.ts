import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: " AIzaSyBguV6TDWjO4mPL76YzwznLJ9NE3Nbj20A",
  authDomain: "chat-app-c4828.firebaseapp.com",
  projectId: "chat-app-c4828",
  storageBucket: "chat-app-c4828.appspot.com",
  messagingSenderId: "307201127298",
  appId: "1:307201127298:web:b7993596ecc9683d09959b",
});
export const db = firebaseConfig.firestore();

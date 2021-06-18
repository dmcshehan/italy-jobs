import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyADbN1LrP_p3ascyDdBhbIxxvjkbTM98a8",
  authDomain: "italyjobs-896fe.firebaseapp.com",
  projectId: "italyjobs-896fe",
  storageBucket: "italyjobs-896fe.appspot.com",
  messagingSenderId: "940521612130",
  appId: "1:940521612130:web:7d421d1c06d6fd0984423b",
  measurementId: "G-YGJ95VSFK3",
};

firebase.initializeApp(config);

const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const authProviders = {
  GoogleAuthProvider,
};

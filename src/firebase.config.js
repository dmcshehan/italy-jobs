import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { createFirestoreInstance } from "redux-firestore"; // <- needed if using firestore

import store from "@store";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADbN1LrP_p3ascyDdBhbIxxvjkbTM98a8",
  authDomain: "italyjobs-896fe.firebaseapp.com",
  projectId: "italyjobs-896fe",
  storageBucket: "italyjobs-896fe.appspot.com",
  messagingSenderId: "940521612130",
  appId: "1:940521612130:web:7d421d1c06d6fd0984423b",
  measurementId: "G-YGJ95VSFK3",
};

firebase.initializeApp(firebaseConfig);

const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
const FacebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const authProviders = {
  GoogleAuthProvider,
  FacebookAuthProvider,
};

export const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  enableClaims: true, // Get custom claims along with the profile
};

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};

export default firebase;

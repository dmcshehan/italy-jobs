import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { createFirestoreInstance } from "redux-firestore"; // <- needed if using firestore

import store from "@store";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyBidYmDaFne33yTuqWb9KbFujGEbsS9J1E",
  authDomain: "examslk-4637d.firebaseapp.com",
  projectId: "examslk-4637d",
  storageBucket: "examslk-4637d.appspot.com",
  messagingSenderId: "171165426149",
  appId: "1:171165426149:web:9d313bd39e370383ea4f0c",
  measurementId: "G-TVT73TFLXC",
};

firebase.initializeApp(config);

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

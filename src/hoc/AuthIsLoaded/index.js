import React from "react";
import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";

export default function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);

  return !isLoaded(auth) ? <div>splash screen...</div> : children;
}

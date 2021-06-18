import React from "react";
import { Stack } from "@chakra-ui/react";

import { GoogleButton, FacebookButton } from "@components";
import { auth, authProviders } from "@fire";

const { GoogleAuthProvider, FacebookAuthProvider } = authProviders;

export default function SocialAuth() {
  const signup = (provider) => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        console.log(user);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  };

  return (
    <Stack direction={{ base: "column", sm: "row" }} justify="space-between">
      <GoogleButton onClick={() => signup(GoogleAuthProvider)}>
        Google
      </GoogleButton>
      <FacebookButton onClick={() => signup(FacebookAuthProvider)}>
        Facebook
      </FacebookButton>
    </Stack>
  );
}

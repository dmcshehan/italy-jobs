import React from "react";

import { Stack } from "@chakra-ui/react";
import { GoogleButton, FacebookButton } from "@components";

import { useFirebase } from "react-redux-firebase";

export default function SocialAuth() {
  const firebase = useFirebase();

  const login = (provider) => {
    return firebase.login({ provider, type: "popup" });
  };

  return (
    <Stack>
      <GoogleButton onClick={() => login("google")}>Google</GoogleButton>
      <FacebookButton onClick={() => login("facebook")}>
        Facebook
      </FacebookButton>
    </Stack>
  );
}

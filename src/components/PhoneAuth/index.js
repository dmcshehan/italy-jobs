import React, { useState, useEffect } from "react";
import firebase from "@fire";

import PhoneInput from "react-phone-input-2";

import {
  Button,
  Box,
  Flex,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import { PhoneButton } from "@components";

import { useErrorToast } from "@hooks";

export default function PhoneAuth({ onButtonClick, insUse }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [code, setCode] = useState("");

  const [sendingCode, setSendingCode] = useState(false);
  const [verifyingCode, setVerifyingCode] = useState(false);

  const errorToast = useErrorToast();

  useEffect(() => {
    //const setuprecaptcha = () => {};

    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha_container",
      {
        size: "invisible",
        callback: function (response) {
          console.log("recature resolved");
          onSignInSubmit();
        },
      }
    );
  });

  const onSignInSubmit = (event) => {
    event.preventDefault();
    setSendingCode(true);

    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        setCodeSent(true);
        setSendingCode(false);

        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        // Error; SMS not sent
        errorToast("Invalid phone number");
        setSendingCode(false);
      });
  };

  const loginWithPhone = () => {
    setVerifyingCode(true);
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        setVerifyingCode(false);
      })
      .catch((error) => {
        // bad verification code
        errorToast("Incorrect Verification Code");
        setVerifyingCode(false);
      });
  };

  const togglePhoneLogin = () => {
    onButtonClick();
  };

  const onNumberChange = (phone) => {
    setPhoneNumber(`+${phone}`);
  };

  return (
    <div>
      <div id="recaptcha_container"></div>
      {/* if phone mobule is not in use show the phone button */}
      {!insUse ? (
        <PhoneButton onClick={togglePhoneLogin}>Phone</PhoneButton>
      ) : (
        <Box rounded={"lg"} mb={4}>
          <PhoneInput
            style={{
              width: "100%",
            }}
            onlyCountries={["lk", "it"]}
            country={"it"}
            value={phoneNumber}
            onChange={onNumberChange}
            inputStyle={{
              width: "100%",
            }}
          />

          {codeSent && (
            <NumberInput onChange={(code) => setCode(code)} mt={4}>
              <NumberInputField placeholder="Enter the code you received" />
            </NumberInput>
          )}

          <Flex direction={{ base: "row" }} justify="space-between">
            {codeSent ? (
              <Button
                isLoading={verifyingCode}
                size="sm"
                mt="4"
                w="48%"
                onClick={loginWithPhone}
                variant={"outline"}
                colorScheme={"whatsapp"}
              >
                Verify Code
              </Button>
            ) : (
              <Button
                isLoading={sendingCode}
                colorScheme={"whatsapp"}
                variant={"outline"}
                size="sm"
                mt="4"
                w="48%"
                onClick={onSignInSubmit}
              >
                Send Code
              </Button>
            )}
            <Button
              colorScheme={"red"}
              variant={"outline"}
              size="sm"
              mt="4"
              w="45%"
              onClick={togglePhoneLogin}
            >
              Cancel
            </Button>
          </Flex>
        </Box>
      )}
    </div>
  );
}

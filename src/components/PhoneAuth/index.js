import React, { useState } from "react";
import firebase from "@fire";

import PhoneInput from "react-phone-input-2";

import {
  Button,
  Box,
  Flex,
  Text,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";

import { useErrorToast } from "@hooks";

export default function PhoneAuth() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [code, setCode] = useState("");
  const [sendingCode, setSendingCode] = useState(false);
  const [verifyingCode, setVerifyingCode] = useState(false);
  const errorToast = useErrorToast();

  const sendCode = (event) => {
    event.preventDefault();
    setSendingCode(true);

    if (window.recaptchaVerifier && window.recaptchaWrapperRef) {
      window.recaptchaVerifier.clear();
      window.recaptchaWrapperRef.innerHTML = `<div id="recaptcha_container"></div>`;
    }

    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha_container",
      {
        size: "invisible",
      }
    );

    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, window.recaptchaVerifier)
      .then((confirmationResult) => {
        setCodeSent(true);
        setSendingCode(false);

        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        // Error; SMS not sent
        errorToast(error.message);
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
        errorToast(error.message);
        setVerifyingCode(false);
      });
  };

  const onNumberChange = (phone) => {
    setPhoneNumber(`+${phone}`);
  };

  const onCancel = () => {
    setCodeSent(false);
  };

  return (
    <div>
      {/* if phone mobule is not in use show the phone button */}

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
        <div ref={(ref) => (window.recaptchaWrapperRef = ref)}>
          <div id="recaptcha_container"></div>
        </div>

        {codeSent && (
          <NumberInput onChange={(code) => setCode(code)} mt={4}>
            <NumberInputField placeholder="Enter the code you received" />
          </NumberInput>
        )}

        {codeSent ? (
          <>
            <Button
              isLoading={verifyingCode}
              mt="4"
              w="full"
              onClick={loginWithPhone}
              colorScheme={"whatsapp"}
            >
              Verify Code
            </Button>
            <Text fontSize="xs" my={"10px"}>
              Didn't get the code?
            </Text>
            <Button
              isLoading={verifyingCode || sendingCode}
              w="full"
              onClick={sendCode}
              colorScheme={"yellow"}
            >
              Resend
            </Button>
            <Button w="full" onClick={onCancel} colorScheme={"red"} mt={4}>
              Cancel
            </Button>
          </>
        ) : (
          <Button
            isLoading={sendingCode}
            colorScheme={"whatsapp"}
            mt="4"
            w="full"
            onClick={sendCode}
          >
            Send Code
          </Button>
        )}
      </Box>
    </div>
  );
}

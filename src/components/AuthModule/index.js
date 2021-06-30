import React, { useState } from "react";
import { Text, Stack } from "@chakra-ui/react";
import { SocialAuth, PhoneAuth } from "@components";

export default function AuthModule() {
  const [phoneVerInUse, setPhoneVerInUse] = useState(false);

  return (
    <div>
      <Stack spacing={4}>
        {!phoneVerInUse && (
          <>
            <Text fontSize={"sm"} color={"gray.600"} textAlign="center">
              With your social network
            </Text>
            <SocialAuth />
            <Text fontSize={"sm"} color={"gray.600"} textAlign="center">
              or
            </Text>
          </>
        )}

        <PhoneAuth
          onButtonClick={() => setPhoneVerInUse((prevState) => !prevState)}
          insUse={phoneVerInUse}
        />
      </Stack>
    </div>
  );
}

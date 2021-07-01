import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

import {
  VStack,
  Flex,
  ButtonGroup,
  IconButton,
  Box,
  Text,
} from "@chakra-ui/react";

import { ControllableListingItem } from "@components";

export default function Listings() {
  const { uid } = useSelector((state) => state.firebase.auth);
  useFirestoreConnect([
    {
      collection: "jobs",
      where: ["uid", "==", uid],
    },
  ]);

  // sync todos collection from Firestore into redux
  const jobs = useSelector(({ firestore: { data } }) => data.jobs && data.jobs);

  return (
    <VStack align="flex-start">
      {jobs &&
        Object.keys(jobs).map((key) => {
          const withId = { id: key, ...jobs[key] };
          return <ControllableListingItem key={key} {...withId} />;
        })}
    </VStack>
  );
}

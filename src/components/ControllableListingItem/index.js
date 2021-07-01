import React from "react";
import { Box, Flex, Text, ButtonGroup, IconButton } from "@chakra-ui/react";

import { RiDeleteBin4Line } from "react-icons/ri";

import { FiEdit3 } from "react-icons/fi";

export default function ControllableListingItem({ title }) {
  return (
    <Box w="full" borderBottom="1px" borderColor="gray.300" py={1}>
      <Flex align="center" justify="space-between">
        <Text fontSize="sm">{title}</Text>
        <ButtonGroup size="sm">
          <IconButton icon={<RiDeleteBin4Line />} />
          <IconButton icon={<FiEdit3 />} />
        </ButtonGroup>
      </Flex>
    </Box>
  );
}

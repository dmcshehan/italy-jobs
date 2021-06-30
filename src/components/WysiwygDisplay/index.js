import React from "react";
import draftToHtml from "draftjs-to-html";
import parse from "html-react-parser";

import { Box } from "@chakra-ui/react";

export default function QuestionInput({ rawState }) {
  return <Box py={2}>{parse(draftToHtml(rawState))}</Box>;
}

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";

import { Provider } from "react-redux";
import store from "./store";

import "normalize.css";

ReactDOM.render(
  <Provider store={store}>
    <ColorModeScript initialColorMode={theme.initialColorMode} />
    <App />
  </Provider>,

  document.getElementById("root")
);

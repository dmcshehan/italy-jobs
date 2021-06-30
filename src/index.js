import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";

import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import store from "@store";
import { rrfProps } from "@fire";

import { AuthIsLoaded } from "@hoc";

import "normalize.css";
import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./styles/index.css";
import "react-phone-input-2/lib/style.css";

let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <PersistGate loading={<p>loading</p>} persistor={persistor}>
        <ColorModeScript initialColorMode={theme.initialColorMode} />
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
      </PersistGate>
    </ReactReduxFirebaseProvider>
  </Provider>,

  document.getElementById("root")
);

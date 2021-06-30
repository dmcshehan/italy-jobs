import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import theme from "./theme";

import "@fontsource/work-sans";
import "@fontsource/inter";

import { Home, Profile, Login, Signup, NotFound } from "@pages";

function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/not_found" component={NotFound} />
          </Switch>
        </div>
      </ChakraProvider>
    </Router>
  );
}

export default App;

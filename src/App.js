import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import theme from "./theme";

import "@fontsource/work-sans";
import "@fontsource/inter";
import "@fontsource/rubik";

import {
  Home,
  Profile,
  Login,
  Signup,
  AddListing,
  MyListings,
  NotFound,
} from "@pages";

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
            <Route exact path="/add-listing" component={AddListing} />
            <Route exact path="/my-listings" component={MyListings} />
            <Route path="/not_found" component={NotFound} />
          </Switch>
        </div>
      </ChakraProvider>
    </Router>
  );
}

export default App;

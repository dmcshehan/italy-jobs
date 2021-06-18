import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import theme from "./theme";

import "@fontsource/work-sans";
import "@fontsource/inter";

import Home from "./pages/Home";
import Post from "./pages/Post";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/post" component={Post} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </div>
      </ChakraProvider>
    </Router>
  );
}

export default App;

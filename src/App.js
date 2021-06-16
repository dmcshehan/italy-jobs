import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Post from "./pages/Post";

function App() {
  return (
    <Router>
      <ChakraProvider>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/post" component={Post} />
          </Switch>
        </div>
      </ChakraProvider>
    </Router>
  );
}

export default App;

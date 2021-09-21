import React from "react";

import { Container } from "@material-ui/core";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home.js";
import Footer from "./components/Footer/Footer";
import Feedback from "./components/Feedback/Feedback.js";

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/cert-gen" />} />
          <Route path="/cert-gen" exact component={Home} />
          <Route path="/feedback" exact component={Feedback} />
        </Switch>
      </Container>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

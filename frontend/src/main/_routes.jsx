import React from "react";

import { Router, Route, Redirect, hashHistory } from "react-router";

// CUSTOM COMPONENTS
import About from "../about/about";
import Todo from "../todo/todo";

const Routes = () => (
  <Router history={hashHistory}>
    <Route path="/todos" component={Todo} />
    <Route path="/about" component={About} />
    <Redirect from="*" to="/todos" />
  </Router>
);

export default Routes;

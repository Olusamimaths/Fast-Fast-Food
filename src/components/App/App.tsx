import React from "react";
import Home from "../Home/Home";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import CartSummary from "../CartSummary/CartSummary";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../../styles/App.scss";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cart">
          <CartSummary />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

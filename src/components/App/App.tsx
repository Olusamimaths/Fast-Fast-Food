import React from "react";
import TopBar from "../TopBar/TopBar";
import Home from "../Home/Home";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import CartSummary from "../CartSummary/CartSummary";
import Footer from "../Footer/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../../styles/App.scss";

const App: React.FC = () => {
  return (
    <>
      {/* <TopBar /> */}
      <Router>
        <TopBar />
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/cart">
            <CartSummary />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

export default App;

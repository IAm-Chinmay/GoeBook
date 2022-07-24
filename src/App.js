import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import User from "./Components/user/pages/User";
import MainHeader from "./Components/Navigation/MainHeader/MainHeader";

import "./Components/user/components/Useritem.css";

const App = () => {
  return (
    <Router>
      <MainHeader/>
      <main>
      <Switch>
        <Route path="/" exact>
          <User />
        </Route>
        <Route path="/places">
          <h1>Places</h1>
        </Route>
      </Switch>
      </main>
    </Router>
  );
};

export default App;

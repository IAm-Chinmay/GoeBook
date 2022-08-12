import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import User from "./Components/user/pages/User";
import UserPlaces from "./Components/places/pages/UserPlaces";
import MainHeader from "./Components/Navigation/MainHeader/MainHeader";
import NewPlaces from "./Components/places/pages/NewPlaces";
import AuthUser from "./Components/user/pages/AuthUser";
import SignUser from "./Components/user/pages/SignUser";

import "./Components/user/components/Users/Useritem.css";

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
        <UserPlaces/>
        </Route>
        <Route path="/newPlaces" exact>
        <NewPlaces/>
        </Route>
        <Route path = "/:uid/places" exact>
          <UserPlaces/>
        </Route>
        <Route path = "/auth">
          <AuthUser/>
        </Route>
        <Route path = "/SignUp">
          <SignUser/>
        </Route>
      </Switch>
      </main>
    </Router>
  );
};

export default App;

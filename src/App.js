import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import User from "./Components/user/pages/User";
import UserPlaces from "./Components/places/pages/UserPlaces";
import MainHeader from "./Components/Navigation/MainHeader/MainHeader";
import NewPlaces from "./Components/places/pages/NewPlaces";

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
        <UserPlaces/>
        </Route>
        <Route path="/newPlaces" exact>
        <NewPlaces/>
        </Route>
        <Route path = "/:uid/places" exact>
          <UserPlaces/>
        </Route>
      </Switch>
      </main>
    </Router>
  );
};

export default App;

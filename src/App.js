import React , {useState , useCallback} from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import User from "./Components/user/pages/User";
import UserPlaces from "./Components/places/pages/UserPlaces";
import MainHeader from "./Components/Navigation/MainHeader/MainHeader";
import NewPlaces from "./Components/places/pages/NewPlaces";
import AuthUser from "./Components/user/pages/AuthUser";
import SignUser from "./Components/user/pages/SignUser";
import { AuthContext } from "./Components/Elements/AuthContext"; 

import "./Components/user/components/Users/Useritem.css";

const App = () => {

  const [isLoggedIn , setIsLogged] = useState(false);

  const login = useCallback(() => {
    setIsLogged(true)
  },[]);

  const logout = useCallback(() => {
    setIsLogged(false)
  },[]);

  let routes;

  if(isLoggedIn){
    routes = (
      <React.Fragment>
        <Switch>
        <Route path="/" exact>
          <User />
        </Route>
        <Route path="/places" exact>
        <UserPlaces/>
        </Route>
        <Route path="/newPlaces" exact>
        <NewPlaces/>
        </Route>
        <Route path = "/:uid/places" exact>
          <UserPlaces/>
        </Route>
        </Switch>
        <Redirect path="/"/>
      </React.Fragment>
    );
  }
  else
  {
    routes = (
      <React.Fragment>
        <Redirect path="/"/>
          <Switch>
      <Route path="/" exact>
          <User />
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
       </React.Fragment>
    );
  }


  return (
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn , login:login , logout:logout}}>
    <Router>
      <MainHeader/>
      <main>
      {/* <Switch>
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
      </Switch> */}
      {routes}
      <Redirect path="/" exact />
      </main>
    </Router>
    </AuthContext.Provider>
  );
};

export default App;

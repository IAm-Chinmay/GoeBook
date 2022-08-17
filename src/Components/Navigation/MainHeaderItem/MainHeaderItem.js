import React , {useContext} from "react";
import {Link} from 'react-router-dom';
import {Navbar,Button ,Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './MainHeaderItem.css';

import { AuthContext } from "../../Elements/AuthContext";

const MainHeaderItem = props =>{

  const auth = useContext(AuthContext);

  const onLogOutHandler = () =>{
      auth.logout();
  }

    return (
    <Navbar expand = "xl"  className="Nav-css">
      <Container>
      <Link className="links-css icon-css" to="/">
        <img
          src="https://i.pinimg.com/474x/11/8a/28/118a28446543f559b54be37e995d0006.jpg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Web Logo"
        />
        <Navbar.Text> </Navbar.Text>
        <Navbar.Brand>GeoBook</Navbar.Brand>
      </Link>
      <Nav className="me-auto Navlinks-css">
        <Link className="links-css user-css" to = "/"><Button variant="secondary">Users</Button></Link>
        {auth.isLoggedIn &&
        <Link className="links-css place-css" to = "/places"><Button variant="secondary">My Places</Button></Link>
        }
      </Nav>
        <Nav className="Navlinks-css-sign">
          {auth.isLoggedIn &&
        <Link className="links-css" to = "/newPlaces"><Button className="links-css" variant="secondary">New Place</Button></Link>
      }
      {!auth.isLoggedIn &&
        <Link className="signUp-css" to = "/auth"> <Button variant="outline-secondary">SignUp</Button></Link>
      }
      {auth.isLoggedIn &&
        <Button className="logout-css" onClick={onLogOutHandler} variant="outline-secondary">LogOut</Button>
      }
        </Nav>
    </Container>
  </Navbar>
    );
}

export default MainHeaderItem;
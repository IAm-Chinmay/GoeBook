import React from "react";
import {Link} from 'react-router-dom';
import {Navbar,Button ,Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainHeaderItem.css';


const MainHeaderItem = props =>{
    return (
    <Navbar expand = "xl"  className="Nav-css">
      <Container>
      <Link className="links-css" to="/">
        <img
          src="https://i.pinimg.com/474x/11/8a/28/118a28446543f559b54be37e995d0006.jpg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
        <Navbar.Text> </Navbar.Text>
        <Navbar.Brand>GeoBook</Navbar.Brand>
      </Link>
      <Nav className="me-auto Navlinks-css">
        <Link className="links-css" to = "/"><Button variant="secondary">Users</Button></Link>
        <Link className="links-css" to = "/places"><Button variant="secondary">Places</Button></Link>
      </Nav>
        <Nav className="Navlinks-css-sign">
        <Link className="links-css" to = "/newPlaces"><Button className="links-css" variant="secondary">New Place</Button></Link>
        <Link  to = "#SignUp"> <Button variant="outline-secondary">SignUp</Button></Link>
        </Nav>
    </Container>
  </Navbar>
    );
}

export default MainHeaderItem;
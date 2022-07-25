import React from "react";
import {Card , Button } from 'react-bootstrap';
import './Userplacelistitem.css'

const Userplacelistitem = props =>{
 
    return(
        <li className="places-cards">
        <Card>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <Card.Subtitle>{props.address}</Card.Subtitle>
          <div className="button-list_css">
          <Button className="b1_css"  variant = "outline-secondary" >Show On Map</Button>
          <Button className="b2_css" variant="outline-info">EDIT</Button>
          <Button className="b3_css" variant="outline-danger">DELETE</Button>
          </div>
        </Card.Body>
      </Card>
      </li>
    );
}

export default Userplacelistitem; 
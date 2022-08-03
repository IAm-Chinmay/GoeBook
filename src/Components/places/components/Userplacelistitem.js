import React , {useState} from "react";
import {Card , Button , Modal} from 'react-bootstrap';

import './Userplacelistitem.css'
// import Map from './Map/Map';

const Userplacelistitem = props =>{
  // const [showModal,setShowModal] = useState(false);

  // const handleClose = () => setShowModal(false);
  // const handleOpen = () => setShowModal(true);

    return( 
<>
        <li className="places-cards">
        <Card>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <Card.Subtitle>{props.address}</Card.Subtitle>
          <div className="d-flex justify-content-around button-list_css">
          {/* <Button  variant = "outline-secondary" onClick={handleOpen}>Show On Map</Button> */}
          <Button  variant="outline-info">EDIT</Button>
          <Button  variant="outline-danger">DELETE</Button>
          </div>
        </Card.Body>
      </Card>
      </li>
{/* // Modal */}
{/* <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header>
        <Modal.Title>{props.address}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Map center = {props.location} zoom ={16} width = {"100%"} height = {"100%"} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
</Modal> */}
</>
    );
}

export default Userplacelistitem; 
import React , {useState} from "react";
import {Card , Button , Modal} from 'react-bootstrap';

import './Userplacelistitem.css'

import UpdatePlaceForm from "../InputForm/UpdatePlaceForm";
// import Map from './Map/Map';

const Userplacelistitem = props =>{
  const [showModal,setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleOpen = () => setShowModal(true);



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
          <Button onClick={handleOpen}  variant="outline-info">EDIT</Button>
          <Button  variant="outline-danger">DELETE</Button>
          </div>
        </Card.Body>
      </Card>
      </li>
{/* // Modal */}
<Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header>
        <Modal.Title>Edit Place</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <UpdatePlaceForm title={props.title} description = {props.description} />
      </Modal.Body>
</Modal>
</>
    );
}

export default Userplacelistitem; 
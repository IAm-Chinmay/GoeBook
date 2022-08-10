import React , {useState} from "react";
import {Card , Button , Modal } from 'react-bootstrap';

import './Userplacelistitem.css'

import UpdatePlaceForm from "../InputForm/UpdatePlaceForm";
// import Map from './Map/Map';

const Userplacelistitem = props =>{
  const [showEditModal,setEditShowModal] = useState(false);
  const [showDeleteModal,setDeleteShowModal] = useState(false);

  const handleEditClose = () => setEditShowModal(false);
  const handleEditOpen = () => setEditShowModal(true);

  const handleDeleteClose = () => setDeleteShowModal(false);
  const handleDeleteOpen = () => setDeleteShowModal(true);

  const handleDeletePlace = () =>{
    setDeleteShowModal(false);
    console.log("Deleted !!");
   
  }

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
          <Button onClick={handleEditOpen} variant = "info"  >EDIT</Button>
          <Button onClick={handleDeleteOpen} variant = "danger"  >DELETE</Button>
          </div>
        </Card.Body>
      </Card>
      </li>
{/* // Edit Modal */}
<Modal show={showEditModal} onHide={handleEditClose} centered>
      <Modal.Header>
        <Modal.Title>Edit Place</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <UpdatePlaceForm title={props.title} description = {props.description} />
      </Modal.Body>
</Modal>

{/*Delete Modal */}
<Modal show={showDeleteModal} onHide={handleDeleteClose} centered>
      <Modal.Header>
        <Modal.Title>Are you sure ?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      Do you want to Delete the Place ?
      </Modal.Body>
      <Modal.Footer>
        <Button onClick = {handleDeleteClose} variant = "outline-secondary">Cancel</Button>
        <Button onClick={handleDeletePlace } variant = "outline-danger">Delete</Button>
      </Modal.Footer>
</Modal>
</>
    );
}

export default Userplacelistitem; 
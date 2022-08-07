import React , {useState} from "react";
import {Form , Button,FloatingLabel} from 'react-bootstrap';

import './newPlaceForm.css';

const NewPlaceForm = () => {
    const [validated, setValidated] = useState(false);
    const [title,setTitle] = useState('') ;

    const [desc,setDesc] = useState('') ;

    const [address,setAddress] = useState('') ;

    const [img,setimg] = useState() ;

    const data = [
          {
            title : title,
            desc : desc,
            address : address,
            img : img
          }
    ]


    const handleSubmit = event => {
      const form = event.currentTarget;
      
      if (form.checkValidity() === false) {
        event.preventDefault();
      event.stopPropagation();
      }else{
        event.preventDefault(); 
        console.log(data);
      }
      setValidated(true);
    };


  
    return (
//         <form>
//         <div className="form-floating form-css">
//         <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
//         <label htmlFor="floatingInput">TITLE</label>
//         <div className="invalid-feedback">
//         Please choose a username.
//       </div>
//       </div>
//       <div className="col-12">
//     <input className="btn btn-primary" type="submit"/>
//   </div>
//       </form>
<Form noValidate validated = {validated} onSubmit = {handleSubmit} className="form-css">
<FloatingLabel
controlId="floatingInput"
label="Enter TITLE"
className="mb-3"
>
<Form.Control onChange={event => setTitle(event.target.value)} minLength={5} required type="text" placeholder="Your Title" />
<Form.Control.Feedback type="invalid" >Please Fill this field / Enter Atleast 5 Characters</Form.Control.Feedback>
</FloatingLabel>
<FloatingLabel
controlId="floatingInput"
label="Enter Description"
className="mb-3"
>
<Form.Control onChange={event => setDesc(event.target.value)} required as="textarea" rows={5} placeholder = "Description Here" />
<Form.Control.Feedback type="invalid" >Please Fill this field</Form.Control.Feedback>
</FloatingLabel>
<FloatingLabel
controlId="floatingInput"
label="Enter Address"
className="mb-3"
>
<Form.Control onChange={event => setAddress(event.target.value)} required type = "text" placeholder = "Address Here" />
<Form.Control.Feedback type="invalid" >Please Fill this field</Form.Control.Feedback>
</FloatingLabel>

<Form.Control onChange={event => setimg(event.target.value)} required type = "file" placeholder = "File Here" accept="image/png, image/gif, image/jpeg" />
<Form.Control.Feedback type="invalid" >Need Image</Form.Control.Feedback>
<div className="d-grid gap-2 form-button-lg">
<Button type = "submit"  disabled = {false} variant="secondary" size="lg">
        Add New Picture
      </Button>
</div>
</Form>
    )
}

export default NewPlaceForm;
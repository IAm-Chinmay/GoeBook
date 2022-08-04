import React , {useState} from "react";
import {Form , Button,FloatingLabel} from 'react-bootstrap';

import './newPlaceForm.css';

const NewPlaceForm = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
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
<Form.Control minLength={5} required type="text" placeholder="Your Title" />
<Form.Control.Feedback type="invalid" >Please Fill this field / Enter Atleast 5 Characters</Form.Control.Feedback>
</FloatingLabel>
<FloatingLabel
controlId="floatingInput"
label="Enter Description"
className="mb-3"
>
<Form.Control required as="textarea" rows={5} placeholder = "Description Here" />
<Form.Control.Feedback type="invalid" >Please Fill this field</Form.Control.Feedback>
</FloatingLabel>
<FloatingLabel
controlId="floatingInput"
label="Enter Address"
className="mb-3"
>
<Form.Control required type = "text" placeholder = "Address Here" />
<Form.Control.Feedback type="invalid" >Please Fill this field</Form.Control.Feedback>
</FloatingLabel>

<Form.Control required type = "file" placeholder = "File Here" accept="image/png, image/gif, image/jpeg" />
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
import React from "react";
import {Form , Button,FloatingLabel} from 'react-bootstrap';

import './newPlaceForm.css';

const NewPlaceForm = () => {
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
<Form  className="form-css">
<FloatingLabel
controlId="floatingInput"
label="Enter TITLE"
className="mb-3"
>
<Form.Control type="text" placeholder="Your Title" />
</FloatingLabel>
<FloatingLabel
controlId="floatingInput"
label="Enter Description"
className="mb-3"
>
<Form.Control as="textarea" rows={5} placeholder = "Description Here" />
</FloatingLabel>
<FloatingLabel
controlId="floatingInput"
label="Enter Address"
className="mb-3"
>
<Form.Control type = "text" placeholder = "Address Here" />
</FloatingLabel>

<Form.Control type = "file" placeholder = "File Here" accept="image/png, image/gif, image/jpeg" />
<div className="d-grid gap-2 form-button-lg">
<Button variant="secondary" size="lg">
        Add New Picture
      </Button>
</div>
</Form>
    )
}

export default NewPlaceForm;
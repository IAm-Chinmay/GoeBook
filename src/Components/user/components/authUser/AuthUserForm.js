import React , {useState} from 'react';
import {Form , FloatingLabel , Button , Alert} from 'react-bootstrap';

import './authUserForm.css';

const AuthUserForm = () =>{

    const [validated, setValidated] = useState(false);

    const submitHandler = event =>{
       
            const form = event.currentTarget;
            
            if (form.checkValidity() === false) {
              event.preventDefault();
            event.stopPropagation();
            }else{
              event.preventDefault(); 
              console.log('Logged In')
            }
            setValidated(true);
        
    }

    return(
        <>
        
        <Form noValidate validated = {validated} onSubmit={submitHandler}>
        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
        required
      >
        <Form.Control required type="email" placeholder="name@example.com" />
        <Form.Control.Feedback type='invalid'>Please use <strong>@</strong>and <strong>.</strong></Form.Control.Feedback>
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control minLength={5} type="password" placeholder="Password" required />
        <Form.Control.Feedback type='invalid'>Please use minimum <strong>5 </strong>Characters</Form.Control.Feedback>
      </FloatingLabel>
      <div className='d-grid gap-2'>
      <Button className="button-css" type="submit" variant = "secondary" size="lg" >LOG IN</Button>
      
      </div>
      </Form>
      </>   
    )
}

export default AuthUserForm; 
import React, {useState} from "react";
import { Form , FloatingLabel , Button } from 'react-bootstrap'

import Switch from "../../Elements/Switch";

import './SignUser.css'

const SignUser = () =>{
    const [validated, setValidated] = useState(false);
    const [Name , setName] = useState('');
    const [UserName , setUserName] = useState('');
    const [Password , setPassword] = useState('');

    const DUMMY_SIGNINFO = [
        {
            Name : Name,
            UserName : UserName,
            PassWord : Password
        }
    ]


    const handleSubmit = event =>{
        const form = event.currentTarget;
        
        if (form.checkValidity() === false) {
          event.preventDefault();
        event.stopPropagation();
        }else{
          event.preventDefault(); 
          console.log(DUMMY_SIGNINFO);
        }
        setValidated(true);
    }

    return (
        <>
        <div className="heading">
            <h1>SignUp</h1>
        </div>
        <div className="form-body">
        <Form noValidate validated = {validated} className="whole-form">
            <FloatingLabel
             label="Enter Full Name"
             controlId="NamefloatingInput"
             className="mb-3"
            >
            <Form.Control required minLength={4} value={Name} onChange={event => setName(event.target.value)} type="text" placeholder="Full Name" />
            <Form.Control.Feedback type="invalid">Required/Min Length 5</Form.Control.Feedback>
            </FloatingLabel>
            <FloatingLabel
             label="Enter UserName"
             controlId="UserNamefloatingInput"
             className="mb-3"
            >
            <Form.Control required minLength={4} value={UserName} onChange={event => setUserName(event.target.value)} type="text" placeholder="UserName" />
            <Form.Control.Feedback type="invalid">Required/Min Length 4</Form.Control.Feedback>
            </FloatingLabel>
            <FloatingLabel
             label="Enter Password"
             controlId="PasswordfloatingInput"
             className="mb-3"
            >
            <Form.Control required minLength={5} value={Password} onChange={event => setPassword(event.target.value)} type="password" placeholder="UserName" />
            <Form.Control.Feedback type="invalid">Required/Min Length 5</Form.Control.Feedback>
            </FloatingLabel>
            <div className="d-grid gap-2">
            <Button variant="outline-secondary" onClick={handleSubmit} type="submit">Submit</Button>
            </div>
        </Form>
        </div>
        <div className="switch-css">
            <Switch toGo = "Log" at = "Sign" goToPage = '/auth' checked/>
        </div>
        </>
    )
}

export default SignUser
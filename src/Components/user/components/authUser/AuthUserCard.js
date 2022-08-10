import React from 'react';

import {Card} from 'react-bootstrap';

import AuthUserForm from './AuthUserForm';

import './authUserCard.css'

const AuthUserCard = () =>{
 return (  <Card className="big-card"  style={{ width: '18rem' }}>
    <Card.Title className="title-css"><h1>Login Here</h1></Card.Title>
        <Card.Body>
            <AuthUserForm/>
        </Card.Body>
    </Card>
)
}

export default AuthUserCard;
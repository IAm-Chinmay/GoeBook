import React from "react";
import {Alert} from 'react-bootstrap';

import Useritem from './Useritem'
import './Userlist.css'


const Userlist = props => {
   if(props.items.length === 0){
    return( 
        <Alert className="alert-css" key='dark' variant='dark'>
          NO USER FOUND !
        </Alert>
    );
   };

   return (
    <ul>
        {props.items.map(user =>(
            <Useritem key={user.id}
             id ={user.id} 
             name={user.name} 
             image={user.image}
             description = {user.desc}
             places={user.places}
              />
        ))}
    </ul>
   )
}

export default Userlist;
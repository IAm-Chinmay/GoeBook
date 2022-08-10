import React from "react";

import Userplacelistitem from './Userplacelistitem';
import {Alert} from 'react-bootstrap';

import './Userplacelist.css';
import '../../../user/components/Users/Userlist.css'

const Userplacelist = props => {
    if(props.items.length ===0){
        return(
            <Alert className="alert-css" key='dark' variant='dark'>
            NO PLACE FOUND !
          </Alert>
        );
    }

    return(
        <ul>
      
             {props.items.map(place => (
                <Userplacelistitem
                  key={place.pid}
                  pid={place.pid}
                  uid = {place.uid}
                  image={place.image}
                  title={place.title}
                  description={place.description}
                  address={place.address}
                  coordinates={place.location}
                />
              ))}
        </ul>
    );

};

export default Userplacelist;
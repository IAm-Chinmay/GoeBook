import React from "react";
import Useritem from './Useritem'


const Userlist = props => {
   if(props.items.length === 0){
    return( 
    <h1>No User Found</h1>
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
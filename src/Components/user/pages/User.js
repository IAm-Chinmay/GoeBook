import React from "react";

import Userlist from '../components/Userlist';

const User = () =>{
   const  USER = [
    {id : 'u1' ,
    name : 'Chinmay Mulay' ,
     places : 3 ,
     image :"https://i.im.ge/2022/07/23/F73aHf.jpg",
     desc : "I have moved to this city three months ago. I love the street food here. " 

},
       {id : 'u2' ,
       name : 'Shreyash Mulay' ,
        places : 1 ,
         image : 'https://i.im.ge/2022/07/20/F1UUp0.jpg',
          desc : "I have moved to this city three months ago. I love the street food here. " }
    ];
    return (<Userlist items={USER}/>);
}

export default User;
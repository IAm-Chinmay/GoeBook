import React from "react";
import { useParams } from "react-router-dom";

import Userplacelist from '../components/Userlist/Userplacelist';

const DUMMY_PLACE = [
    {
        pid : 'p1',
        image : 'https://c0.wallpaperflare.com/preview/894/517/209/india-raigad-raigad-fort-adventure.jpg',
        title : 'Raigad Fort',
        description : 'Raigad is a hill fort situated in Mahad, Raigad district of Maharashtra, India. It is one of the strongest fortresses on the Deccan Plateau.',
        address : 'Raigad, Maharashtra 402305',
        uid : 'u1',
        location : {
            lat :18.2346858,
            lng : 73.4442504
        },
    }  ,
     {
        pid : 'p2',
        image : 'https://static.toiimg.com/photo/53438383.cms',
        title : 'Red Fort',
        description : 'The Red Fort or Lal Qila   is a historic fort in Old Delhi, Delhi in India that served as the main residence of the Mughal Emperors',
        address : 'Mahatma Gandhi Marg, Lal Qila, Raj Ghat, New Delhi, Delhi 110006',
        uid : 'u2',
        location : {
            lat :28.656851,
            lng : 77.244873
        },
    }
];

const UserPlaces = () =>{
    const userId = useParams().uid;
  const loadedPlaces = DUMMY_PLACE.filter(place => place.uid === userId);
    return <Userplacelist items ={loadedPlaces}/>;
}

export default UserPlaces;
import React from 'react';

import './NewPlaces.css';

import NewPlaceForm from '../components/InputForm/NewPlaceForm';

const NewPlaces = () => {
    return (
        <>
        <h1 className='title-info'>ADD PLACE</h1>
        <NewPlaceForm/>
        </>
    );
}

export default NewPlaces;
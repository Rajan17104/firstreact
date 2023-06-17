import React, { useState } from 'react';
import FamousPlaces from './FamousPlaces';

function CountryFun(props) {

    const [countryName,setCountryName]= useState('india');

    return (
        <div>
            <FamousPlaces />
        </div>
    );
}

export default CountryFun;
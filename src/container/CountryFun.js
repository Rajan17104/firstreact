import React, { useState } from 'react';
import FamousPlacesFun from './FamousPlacesFun';

function CountryFun(props) {

    const [countryName,steCountryName]= useState('india')

    return (
        <div>
            <FamousPlacesFun cname = {countryName} />
        </div>
    );
}

export default CountryFun;
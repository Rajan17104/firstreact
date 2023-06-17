import React, { Component } from 'react';
import FamousPlaces from './FamousPlaces';

class Country extends Component {

    constructor(props) {
        super(props);
        
        this.state={
            country_name: 'india'
        }

    };
    

    render() {
        return (
            <div>
                <FamousPlaces cname = {this.state.country_name} />
            </div>
        );
    };
    
}

export default Country;
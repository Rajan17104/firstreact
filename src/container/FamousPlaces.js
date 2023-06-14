import React, { Component } from 'react';

class FamousPlaces extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.cname === 'india' ? 'Ram mandir' : 'Salangpur'}</h1>
            </div>
        );
    }
}

export default FamousPlaces;
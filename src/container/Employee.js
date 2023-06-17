import React, { Component } from 'react';

class Employee extends Component {

    constructor(props) {
        super(props);
        this.state ={
            id:101, 
            Name:'rajan',
            Age:50
        }
    }

    handleAge = () =>{
        this.setState({
            Age:40
        })
    };
    

    render() {
        return (

            <div>
                <h1>Employee base component</h1>
                <p>Name:{this.state.Name}</p>
                <p>Age:{this.state.Age}</p>
                <button onClick={this.handleAge} >Change Age</button>
            </div>
        );
    }
}

export default Employee;
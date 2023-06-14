import React, { Component } from 'react';

class Counter1 extends Component {

    constructor(props) {
        super(props);
        
        this.state ={
            x:0
        }
    }

    handleplus = () =>{
        this.setState({
            x: this.state.x+1
        })
    }

    handleminus = () =>{
        this.setState({
            x: this.state.x-1
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleplus}>+</button>
                <p>{this.state.x}</p>
                <button onClick={this.handleminus}>-</button>
            </div>
        );
    }
}

export default Counter1;
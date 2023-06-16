import React, { Component } from 'react';

class Counter1 extends Component {

    constructor(props) {
        super(props);
        
        this.state ={
            count:0
        }
    }

    handleplus = () =>{
        if(this.state.count < 5){
            this.setState({
                count: this.state.count + 1
            })
        }
        
    }

    handleminus = () =>{
        if(this.state.count > 0){
            this.setState({
                count: this.state.count - 1
            })
        }
      
    }

    render() {
        return (
            <div>
                <button disabled ={this.state.count < 5 ? false :true} onClick={this.handleplus}>+</button>
                <p>{this.state.count}</p>
                <button disabled ={this.state.count === 0 ? true : false} onClick={this.handleminus}>-</button>
            </div>
        );
    }
}

export default Counter1;
import React, { Component } from 'react';

class Clock extends Component {

    //1.
    constructor(props) {
        super(props);
        this.state ={
            time: new Date()
        }
    }

    //3.
    tick = () =>{
        this.setState({
            time: new Date()
        })
    }

    //4.
    componentDidMount = () =>{
      this.timeData = setInterval(this.tick , 1000)
    }

    //6.
    componentDidUpdate = (prevProps,prevstate) =>{
        if(prevstate.time !== this.state.time){
            console.log(" componentDidUpdate Called");
        }
    }

    //5.
    componentWillUnmount = () =>{
        clearInterval(this.timeData)
    }
    
    //2.  //4.
    render() {
        return (
            <div>
              <p>{this.state.time.toLocaleTimeString()}</p>  
            </div>
        );
    }
}

export default Clock;
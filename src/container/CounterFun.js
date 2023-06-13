import React, { useState }  from 'react';

function CounterFun(props) {
    // let x=0;

    const [ x=0, setX] = useState();

    const handlePlus = () => {
        setX(x++);
        
    }

    // const handleMinus = () => {
    //     x--;
    // }

    return (
        <div>
            <h1>Counter</h1>
            <button onClick={handlePlus}>+</button>
            <p>Counter:{x}</p>
            {/* <button onClick={handleMinus}>-</button> */}
        </div>
    );
}

export default CounterFun;
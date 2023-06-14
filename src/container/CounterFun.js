import React, { useState } from 'react';

function CounterFun(props) {

    const[count,setCount] = useState(0);


    const handlePlus = () =>{
        if(count < 5 ){
            setCount(count + 1)
        }
        
    }

    const handleMinus = () =>{
        if(count > 0){
            setCount(count - 1)

        }
    }


    return (
        <div>   
            <button disabled ={count < 5 ? false :true} onClick={handlePlus}>+</button>
            {/* <p>function base</p> */}
            <p>{count}</p>
            <button disabled ={count === 0 ? true : false} onClick={handleMinus}>-</button>
        </div>
    );
}

export default CounterFun;
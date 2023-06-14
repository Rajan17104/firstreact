// import React, { useState }  from 'react';

// function CounterFun(props) {
    

//     const [x, setX] = useState(0);

//     const handlePlus = () => {
//         setX(x+1);
        
//     }

//     const handleMinus = () => {
//         setX(x-1);
        
//     }

   
//     return (
//         <div>
//             <h1>Counter</h1>
//             <button onClick={handlePlus}>+</button>
//             <p>{x}</p>
//             <button onClick={handleMinus}>-</button>
//         </div>
//     );
// }

// export default CounterFun;

import React, { useState } from 'react';

function CounterFun(props) {

    const[x,setX] = useState(0);


    const handlePlus = () =>{
        setX(x+1)
    }

    const handleMinus = () =>{
        setX(x-1)
    }


    return (
        <div>   
            <button onClick={handlePlus}>+</button>
            {/* <p>function base</p> */}
            <p>{x}</p>
            <button onClick={handleMinus}>-</button>
        </div>
    );
}

export default CounterFun;
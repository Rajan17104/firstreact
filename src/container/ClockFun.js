import React, { useEffect, useState } from 'react';

function ClockFun(props) {

    //1.
    const [time , setTime] = useState (new Date());

    const tick = () =>{
        setTime(new Date());
    }

    //Hook...
    useEffect (() => {
        let timeData = setInterval(tick , 1000);

        return() => {
            clearInterval(timeData);
        }

    }, [time,setTime]);

    //2.  //4.
    return (
        <div>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    );
}

export default ClockFun;
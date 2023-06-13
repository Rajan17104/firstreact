import React, { useState } from 'react';

function EmployeeFun(props) {

    const [Name,setName]=useState("rajan");
    const [Age,setAge]=useState(50);

    const handleAge = () =>{
        setAge(40);
    }

    return (
        <div>
            <h1>Employee function base component</h1>
            <p>Name:{Name}</p>
            <p>Age:{Age}</p>
            <button onClick={handleAge}>Change Age</button>
        </div>
    );
}

export default EmployeeFun;
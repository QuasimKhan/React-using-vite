import React from "react";  
import { useState } from "react";
import Button from "./Button";


const Form = () => {

    const [name, setName] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        alert(`Hello ${name}`);
    }

    return (
       <form action="" onSubmit={submitHandler}>
        <label htmlFor=""> Enter Your Name : 
            <input type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </label>
        <Button/>
       </form>
    );
};

export default Form;
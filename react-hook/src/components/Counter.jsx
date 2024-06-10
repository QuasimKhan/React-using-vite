import React from "react";
import { useContext } from "react";
import { CounterContext } from "../contexts/Counter";

const Counter = () => {
    const ContextCounter = useContext(CounterContext);

    const handleIncrement = () => {
        ContextCounter.setCount(ContextCounter.count + 1)
    }

    const handleDecrement = () => {
        if(ContextCounter.count > 0)
        ContextCounter.setCount(ContextCounter.count - 1)
    }

    return(
        <div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default Counter
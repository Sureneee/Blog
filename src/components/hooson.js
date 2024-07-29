import React, { useState, useEffect } from "react";


export const Hooson = () => {
    const [count, setCount] = useState(10);

    useEffect(() => {
      setInterval(() => {
        
      }, 1000)
        // document.title = `You clicked ${count} times`;
    },[count]);
    
    return (
        <>
            <h1 className="font-extrabold">Countdown timer</h1>
            <button onClick={() => setCount(count -1)}>Time remaining:{count}</button>
        </>
    )
}
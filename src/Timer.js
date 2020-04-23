import React, { useState, useEffect } from "react";
import Clock from "./Clock.js"

const Timer = ()=>{
    const [time, setTime] = useState (59);
    useEffect(()=>{
        const interval = setInterval(()=> {
            setTime(time => time  - 1);
                }, 1000);
            return () => clearInterval(interval);
        },[time]);
 
    return (
        <div className="timer"><Clock />{`:${time}`}</div>
    )

}

export default Timer;


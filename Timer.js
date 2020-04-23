import React, { useState, useEffect } from "react";
import "./styles.css";

const Timer = ()=>{
    const [time, setTime] = useState (45);

    useEffect(()=>{
        const interval = setInterval(()=> {
            setTime(time - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [time]);

    return (
        <div className="timer">{`00:${setTime}`}</div>
    )

}

export default Timer;
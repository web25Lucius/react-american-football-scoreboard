import { useState, useEffect } from "react";


const Clock = ()=>{
    const [clocks, setClock] = useState (44);
    

    useEffect(()=>{
        const interval = setInterval(()=> {
            setClock(clocks  - 1);
                }, 60000);
            return () => clearInterval(interval);
        },[clocks]);

    return (
        // <span className="timer">{`${clocks}:`}</span>
        (clocks)
    )

}

export default Clock;


// const intervalClock = setInterval(()=>{
            //     setClock(clock - 1);   setClock(clock > 0 - 1);
            // }, 60000);
            // return () => clearInterval(intervalClock);

            //${clock}

            // intervalClock = setInterval(()=> {
            //     setClock(clock - 1);
            //     }, 60000);
            // return ()=> clearInterval(clock);
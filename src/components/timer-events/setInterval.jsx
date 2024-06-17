import { useEffect, useState } from "react";

export function SetInterval(){
    const [msg ,setMsg] = useState('');

    function setTime(){
        var now = new Date();
       setMsg(now.toLocaleTimeString());
    }

    useEffect(() =>{
            setInterval(setTime,1000);
    },[])

    
return(
    <div className="container-fluid">
            <h1 className="text-center text-primary">{msg}</h1>
    </div>
)
}       
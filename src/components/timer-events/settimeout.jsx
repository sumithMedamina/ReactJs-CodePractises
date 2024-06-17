import { useEffect, useState } from "react"

export function SetTimeout(){
    const [msg,setMsg] = useState('');

    function msg1(){
        setMsg("Hello !")
    }

    function msg2(){
        setMsg("Good Morning !")
    }

    function msg3(){
        setMsg("Welcome to React Js !")
    }

    useEffect(()=>{
        setTimeout(msg1,3000);
        setTimeout(msg2,5000);
        setTimeout(msg3,10000);
    },[])

    

    return(
        <div className="container-fluid">
                <h1 className="text-center text-primary">{msg}</h1>
        </div>
    )
}
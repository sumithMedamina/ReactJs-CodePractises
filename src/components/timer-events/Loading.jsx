import { useEffect, useState } from "react"

export function LoadingSpinner(){
    const [status, setStatus] = useState(1);
    const [loadBar ,setLoadBar] = useState({display:'none'});
    const [image ,setImage] = useState({display:'none'});


    var count =1;
    function Loading(){
        if(count===100){
            setLoadBar({
                display:'none'
            })
            setImage({
                display:"block"
            })
            count=1;
        }else{
            count++;
            setStatus(count);
        }
    }

    function handleButton(){
        setLoadBar({
            display:'block'
        })
        setInterval(Loading,200)
    }

    useEffect(()=>{

    },[])

    return(
        <div className="container-fluid">
            <button className="btn btn-primary" onClick={handleButton}>Load Image</button>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="text-center" style={loadBar}>
                    <div className="spinner-border"></div>
                    <p>{status} %<br />
                    Loading...
                    </p>
                </div>
                <div style={image}>
                    <img src="images/i2.jpg" height="300" width="300" alt="" />
                </div>
            </div>
        </div>
    )
}
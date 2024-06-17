import { useEffect, useState } from "react"

export function ProgressBar(){
    const [loadBar ,setLoadBar] = useState({display:'none'});
    const [image ,setImage] = useState({display:'none'});
    const [progressBar ,setProgressBar] = useState(1);


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
            setProgressBar(count);
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
                    <progress min="1" max="100" value={progressBar}></progress> 
                    <p>{progressBar} %<br />
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
import { useEffect, useState } from "react"

export function SetImages(){
    const [images] = useState(["images/i1.jpg","images/i2.jpg","images/i3.jpg","images/i4.jpg","images/i5.jpg","images/i6.jpg"]);
    const [ image,setImage] = useState('');
    var count=0;

    function loadImages(){
        
        if(count===images.length){
           count=0;
        }else{
            console.log(images[count]);
            setImage(images[count]);
            count++;
        }
        
    }

    useEffect(()=>{
        setInterval(loadImages, 4000);
    },[])
    return(
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100">
            <h2 className="text-primary">Iphone 15</h2>
            <img src={image} height="300" width="300" className="p-2 m-2 border border-1 border-warning" alt=""/>
        </div>
    )
}
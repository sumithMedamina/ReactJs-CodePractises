import { useState } from "react";
import "./marque.css";

export function Marquee(){
    const [images] = useState(["images/i1.jpg","images/i2.jpg","images/i3.jpg","images/i4.jpg","images/i5.jpg","images/i6.jpg"]);

    function handleMouseover(e){
       e.currentTarget.stop()
    }

    function handleMouseout(e){
       e.currentTarget.start();
    }

    return(
 <div className="container-fluid">
        <div className="mt-4">
               <marquee scrollamount="15" onMouseOver={handleMouseover} onMouseOut={handleMouseout}>
               {
                    images.map(photo =>

                            <img src={photo} width="100px" height="100px" className="me-2" alt="" />

                    )
                }
               </marquee>
        </div>
 </div>
    )
}
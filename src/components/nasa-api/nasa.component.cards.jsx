import { useEffect, useState } from "react";
import "./nasa.component.css"

export function Card(){
const[mars,setMars] =useState({photos:[]})

useEffect(()=>{
fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
.then(Response => Response.json())
.then(data => setMars(data))
.catch(error => console.error(error))
},[])


return(
    <div className="container-fluid">
        <h2 className="d-flex justify-content-center">Mars Rover Photos</h2>
        <div className="d-flex flex-wrap">
            {
                mars.photos.map(item =>
                    <div key={item.id} className="card m-2 p-2 ">
                        <img src={item.img_src} height="200" alt="" className="card-img-top"/>
                        <div className="card-body">
                            <dl>
                                <dt>Camera Name</dt>.

                                <dd>{item.camera.full_name}</dd>
                                <dt>Rover Name</dt>
                                <dd>{item.rover.name}</dd>
                            </dl>
                        </div>
                    </div>
                )
            }
        </div>

    </div>
)

}
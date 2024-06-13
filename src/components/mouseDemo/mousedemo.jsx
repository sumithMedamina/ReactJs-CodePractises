import { useState } from "react";
import "./mousedemo.css";

export function  MouseHover(){
    const [images] = useState(["images/i1.jpg","images/i2.jpg","images/i3.jpg","images/i4.jpg","images/i5.jpg","images/i6.jpg"]);
    const [preview, setPreview] = useState("images/i1.jpg");

    function handleMouseHover(e){
            setPreview(e.target.src);
    }
    return(
        <div className="container-fluid p-0">
            <header className="d-flex justify-content-align-content-lg-start bg-dark p-2 text-white">
                        <p  className="me-2">Mobiles</p>
                        <p className="me-2">Clothing</p>
            </header>
            <section className="row">
                <nav className="col-2 ">
                    {
                        images.map(image =>
                            <div key={image} className="mt-2 p-0 border border-2 border-primary" style={{'width':'70px'}}>
                                <img src={image} width="65px" height="65px" onMouseOver={handleMouseHover} alt="" />
                            </div>
                        )
                    }
                </nav>
                <main className="col-10">
                    <div className="mt-5 border border-1 border-dark" style={{'width':'420px'}}>
                    <img src={preview} width="400px" height="400px" className="preview-image" alt="" />
                    </div>
                </main>
            </section>
        </div>
    )
}
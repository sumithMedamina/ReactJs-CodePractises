import { useState } from "react"

export function HandleTouch(){
    const [styleObj, setStyleObj] = useState({'position':'', 'left':'','top':''});
    function handleTouch(e){
            setStyleObj(
                {
                    position : 'fixed',
                    left : e.touches[0].clientX + 'px',
                    top : e.touches[0].clientY + 'px'
                }
            )
    }
    return(
        <div className="container-fluid">
                    <img src="images/i1.jpg"  height="100" width="100" style={styleObj} onTouchMove={handleTouch} alt="" />
        </div>
    )
}
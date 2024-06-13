import { useState } from "react"

export function OnMouse(){
    const [stylesObject ,setStylesObject ]= useState({'position':'','left':'','top':''});

    function handleMouseMove(e){
        setStylesObject(
            {
                position:'fixed',
                left: e.clientX + 'px',
                top: e.clientY + 'px'
            }
        )
    }

   return(
    <div onMouseMove={handleMouseMove}>
        <div style={{height:'1000px'}}>
         <p>Move your Cursor. <br />
         X = {stylesObject.left} Y = {stylesObject.top}
         </p>
        </div>
        <img src="images/i1.jpg" height="75px" width="75px" style={stylesObject} alt="" />
    </div>
   )
}
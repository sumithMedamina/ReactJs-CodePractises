import { useState } from "react";

export function DoubleClick(){
    const [msg , setMsg] =  useState('');
    const [style, setStyle] = useState('');

function openWindow(e){
    window.open(
        "images/i1.jpg","Mobile","width=400 height=400"
    );
}
function handleCut(){
    setMsg("removed and copied to clipboard.");
    setStyle('text-danger');
}

function handleCopy(){
    setMsg("copied to clipboard.");
    setStyle('text-warning');
}

function handlePaste(){
    setMsg("pasted from clipboard");
    setStyle('text-success');
}
    return(
        <div className="container-fluid">
            <h3>DoubleClick</h3>
            <img src="images/i1.jpg" width="100" height="100" onDoubleClick={openWindow} alt="" /> <br />
            <textarea rows="4" cols="40" onCut={handleCut} onCopy={handleCopy} onPaste={handlePaste}>

            </textarea>
            <p className={style}>{msg}</p>
        </div>
    )
}
import { useState } from "react"

export function StyleBinding(){
    const [styles, setStyles] = useState({'fontSize':'10px','color':'black'});

    function handleFontChange(e){
        setStyles({
            fontSize:e.target.value + "px",
            color:styles.color
        })
    }

    function handleColorChange(e){
        setStyles({
            fontSize:styles.color,
            color:e.target.value
        })
    }

    return(
        <div className="container-fluid">
            <h2>Style Binding</h2>
            <dl>
                <dt>Font-Size</dt>
                <input type="range" min="10" max="100"  onChange={handleFontChange } />
                <dt>Font-Color</dt>
                <input type="color" onChange={handleColorChange}/>
            </dl>
            <p className="text-center" style={styles}>Sample Text</p>
        </div>
    )
}
import { useState } from "react"


export function StyleBinding(){
    const [userName , setUserName] = useState('');
    const [styleObject , setStyleObject] = useState({'border':'','boxShadow':''});

    function verifyName(e){
          setUserName(e.target.value);
          if(userName === ""){
            setStyleObject({
                border:'2px solid red',
                boxShadow:'2px 2px 2px red'
            })
          }
          
          else{
            setStyleObject({
                border:'2px solid green',
                boxShadow:'2px 2px 2px green'
            })
          }
    }

    return(
        <div className="container-fluid">
               <dl>
                    <dd>USER NAME :</dd>
                    <dt><input type="text" style={styleObject} onBlur={verifyName}/></dt>
               </dl>
        </div>
    )
}
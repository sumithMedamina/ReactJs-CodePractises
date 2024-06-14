import { useState } from "react"

export function UserNameUpperCSEvalidation(){
    const [name,setName] =useState('');
    const[tip,setTip] =useState('');

    function handleCase(e){
            setName(name.toUpperCase());
            if(name===""){
                setTip("User Name Required");
            }else{
                setTip('');
            }
    }
    function handleUserChange(e){
            setName(e.target.value);
    }
    function showTip(){
            setTip('Name in Block Letters only');
    }
    return(
        <div className="container-fluid">
                            <h2>Register User</h2>
                            <dl>
                                <dt>UserName</dt>
                                <dd><input type="text" placeholder="Name in Capital letters"
                                      value={name}
                                      onChange={handleUserChange}
                                      onBlur={handleCase}
                                      onFocus={showTip}/>
                                </dd>
                                <dd>{tip}</dd>
                            </dl>
        </div>
    )
}
import React, { useState, createContext } from 'react';
import { HomeComponent } from "./home"



export let UserDetailsContext = createContext(null);

export function ContextDemo(){

    const [userName, setUserName] = useState({ UserName: ' '});

    function handleChange(e){
        setUserName({
          UserName: e.target.value
        })
    }

    return(
        <div className=" bg-black text-white m-4 p-4">
            Name: <input type="text" onChange={handleChange}/>
            <UserDetailsContext.Provider value={{ UserName: userName.UserName }}>
            <h2>Parent Component</h2>
            <HomeComponent />
            </UserDetailsContext.Provider>
        </div>
    )
}
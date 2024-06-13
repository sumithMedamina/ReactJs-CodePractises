import { useState } from "react"

export function KeyDemo(){
const [users] = useState([{'UserName':'Jhon'},{'UserName':'Jhon12'},{'UserName':'Sumith'}]);
const [userError,setUserError] = useState();
const [errorClass,setErrorClass] =useState();
const [passWarning,setPassWarning]=useState({'display':'none'});

function verifyUser(e){
for(var user of users){
    if(user.UserName===e.target.value){
            setUserError('UserNameTaken-TryAnother');
            setErrorClass('text-danger');
            break;
    }else{
        setUserError('UserNameAvailable');
            setErrorClass('text-success');
    }
}
}

function verifyPassword(e){
    console.log(`
        keyCode :  ${e.keyCode}\n
        charCode : ${e.charCode}\n
        which: ${e.which}
        `);
    if(e.which>=65 && e.which<=90){
        setPassWarning({'display':'block'})
    }
    else{
        setPassWarning({'display':'none'})
    }

}

    return(
        <div className="container-fluid">
            <h3>RegisterUser</h3>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onKeyUp={verifyUser}/></dd>
                <dd className={errorClass}>{userError}</dd>
                <dt>Password</dt>
                <dd><input type="password" onKeyPress={verifyPassword}/></dd>
                <dd className="text-warning" style={passWarning}>
                    <span className="bi bi-exclamation-triangle-fill"></span>Warning : Caps On
                </dd>
            </dl>

        </div>
    )
}
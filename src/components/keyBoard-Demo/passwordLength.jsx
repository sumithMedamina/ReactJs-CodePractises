import { useState } from "react"

export function PasswordValidation(){
   
    const [style, setStyle] =useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const hasUpperCase = str => /[A-Z]/.test(str);

    function PasswordManager(e){
          if(e.target.value.length<4){
            setErrorMsg('PoorPassword');
            setStyle('text-danger');
          }
          else if(e.target.value.length>=4 && e.target.value.length<=15 && !hasUpperCase(e.target.value)){
            setErrorMsg('WeakPassword');
            setStyle('text-warning');
          }
          else if(e.target.value.length>=4 && e.target.value.length<=15 && hasUpperCase(e.target.value)){
            setErrorMsg('StrongPassword');
            setStyle('text-success');
          }
          else{
            setErrorMsg('Password To Long');
            setStyle('text-danger')
          }
    }
    return(
        <div className="container-fluid">
             <h3>Password Validations</h3>
             <dl>
                <dt>Enter Password</dt>
                <dd>
                    <input type="text" onKeyUp={PasswordManager}/>
                </dd>
                <dd className={style}>{errorMsg}</dd>
             </dl>
        </div>
    )
}
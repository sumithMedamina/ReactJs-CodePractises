

export function TutorialLogin(){
    return(
        <div>
                <h2>Login</h2>
                <dl>
                    <dt >UserName</dt>
                    <dd ><input className="form-control w-25" type="text" name="userName"/></dd>
                    <dt >Password</dt>
                    <dd><input className="form-control w-25" type="text" name="password"/></dd>
                </dl>
                <button className="btn btn-primary" >Login</button>
        </div>
    )
}
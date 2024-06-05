export function NetflixRegister(){
    return(
        <div className="netflix-register">
        <div className="w-50">
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="input-group">
            <input type="email" placeholder="your email address" className="form-control"/>
            <button className="btn btn-danger">Get Started</button>
            </div>
        </div>
        </div>
    )
}
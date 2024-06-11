import { useState } from "react";

export function DarkMode() {
    const [theme, setTheme] = useState('');
    const [buttonTheme, setButtonTheme] = useState('btn btn-dark text-white w-100');

    function handleThemeChange(e) {
        if (e.target.checked) {
            setTheme('bg-dark text-white');
            setButtonTheme('btn btn-primary text-white w-100');
        } else {
            setTheme('');
            setButtonTheme('btn btn-dark text-white w-100');
        }
    }

    function handleTextChange(e){
        if(e.target.value===""){
            setTheme('bg-danger text-white');
            setButtonTheme('btn btn-dark text-white w-100');
        }else{
            setTheme('bg-success text-white');
            setButtonTheme('btn btn-dark text-white w-100')
        }
    }

    return (
        <div className="container-fluid p-0" style={{ height: '100vh', display: 'flex'}}>
            <div className={theme} style={{ flex: 1 }}>
                <div className="d-flex justify-content-end mt-4 me-4 form-switch">
                    <input type="checkbox" className="form-check-input" onChange={handleThemeChange}/> Dark Mode
                </div>
                <div className="d-flex justify-content-center align-items-center" style={{ height:"500px" }}>
                    <form className={theme}>
                        <h3 className="bi bi-person-fill">  UserLogin</h3>
                        <dl>
                            <dt>UserName</dt>
                            <dd><input type="text" className="form-control" onBlur={handleTextChange}/></dd>
                            <dt>Password</dt>
                            <dd><input type="text" className="form-control" /></dd>
                        </dl>
                        <button className={buttonTheme}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

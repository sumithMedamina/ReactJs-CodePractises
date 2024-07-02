import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export function TutorialVideos(){

    const[cookies,setCookie,removeCookie] = useCookies();
    const navigate = useNavigate();

    useEffect(()=>{
        if(cookies.userId===undefined){
            navigate("/login");
        }
    })

    function handleSignout(){
           removeCookie("userId");
           navigate("/login");
    }

    return(
        <div>
                <h2>React Videos-{cookies.userId} <span><button onClick={handleSignout} className="btn btn-link">signout</button></span></h2>
                <br />
                <br />
                <div className="d-flex">
                <div className="me-3">
                    <iframe src="https://www.youtube.com/embed/8g49A29hayc" height="300" width="400" frameborder="0"></iframe>
                </div>
                <div>
                    <iframe src="https://www.youtube.com/embed/MAkXifYHnuw" height="300" width="400" frameborder="0"></iframe>
                </div>
                </div>
        </div>
    )   
}
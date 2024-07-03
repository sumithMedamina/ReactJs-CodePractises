import axios from "axios";
import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom";




export function DeleteVideo(){
    var navigate = useNavigate();

    const [video, setVideo] = useState([{
        id:0,
        title:"",
        url:"",
        views:0,
        likes:0,
        subscribe:false
    }]);
    var params = useParams();

    useEffect(()=>{
        axios({
            method:"get",
            url:`http://127.0.0.1:5050/video/${params.id}`
        }).then((response) =>{
            setVideo(response.data);
        })
    })

    function handleDelete(){
        axios({
            method:"delete",
            url:`http://127.0.0.1:5050/deletevideo/${params.id}`
        })
            navigate("/managevideos");
        
    }
     
    return(
        <div>
            <span><h1 className="me-2">Are you sure ? Delete Video</h1>
             <button onClick={handleDelete} className="btn btn-danger me-2">Yes</button>
             <Link to="/managevideos" className="btn btn-primary">No</Link>
            </span>
            <div className="card w-50">
                    <div className="card-header">
                            <h4>{video[0].title}</h4>
                    </div>
                    <div className="card-body">
                        <iframe src={video[0].url} height="300" width="100%" title={video[0].title}></iframe>
                    </div>
                    <div className="card-footer">
                    <p className="bi bi-eye">[{video[0].views}] views <span className="bi-hand-thumbs-up">{video[0].likes}</span> likes </p>
                    </div>
            </div>

        </div>
    )
}
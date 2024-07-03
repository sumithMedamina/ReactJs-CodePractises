import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";



export function TutorialVideoDetails(){

    var params = useParams();

    const [video, setVideo] = useState([{
        id:0,
        title:"",
        url:"",
        view:0,
        likes:0,
        subscribed:false
    }]);

    useEffect(()=>{
        axios({
            method:"get",
            url:`http://127.0.0.1:5050/video/${params.id}`
        })
        .then(response =>{
            setVideo(response.data);
        })
        .catch(err =>{
            console.log(err);
        })
    })

    return(
      <div>
         <h2>Video Details</h2>
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
           <Link to="/managevideos"><strong>Back to manage-videos</strong></Link>
      </div>
      
    )
}
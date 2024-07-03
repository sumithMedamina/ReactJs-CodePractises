import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export function TutorialVideoManagement(){

    const [videos ,setVideos] = useState([]);

    useEffect(()=>{
        axios({
            method:"get",
            url:"http://127.0.0.1:5050/videos"
        })
        .then(response =>{
            setVideos(response.data);
        })
    })

    return(
        <div>
               <div className="mb-2">
               <h2>Video Management</h2>
               <Link to="/addvideo" className="btn btn-success">Add Video</Link>
               </div>
                <table className="table table-hover">
                    <thead >
                        <tr>
                            <th>Topic</th>
                            <th>Video</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            videos.map(video =>
                                <tr key={video.id}>
                                    <td>{video.title}</td>
                                    <td><iframe src={video.url} width="100" height="100" title={video.title}></iframe></td>
                                    <td>
                                        <Link to={`/videodetails/${video.id}`} className="btn btn-primary me-2">
                                        <span  className="bi bi-eye text-white">Details</span>
                                        </Link>
                                        <Link to={`/editvideodetails/${video.id}`} className="btn btn-warning me-2">
                                        <span  className="bi-pen-fill text-white">Edit</span>
                                        </Link>
                                        <Link to={`/deletevideo/${video.id}`} className="btn btn-danger">
                                        <span  className="bi-bi-trash-fill">Delete</span>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
        </div>
    )
}
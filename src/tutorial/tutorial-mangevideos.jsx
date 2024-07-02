import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export function TutorialVideoManagement(){

    const [videos ,setVideos] = useState([]);

    useEffect(()=>{
        axios({
            method:"get",
            url:"http://localhost:5050/videos"
        })
        .then(response =>{
            setVideos(response.data);
        })
    })

    return(
        <div>
                <h2>Video Management</h2>
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
                                    <td><iframe src={video.url} width="100" height="100" frameborder="0"></iframe></td>
                                    <td>
                                        <Link to={`/videodetails/${video.id}`} className="btn btn-primary">
                                        <span  className="bi bi-eye text-white">Details</span>
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
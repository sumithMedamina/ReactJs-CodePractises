import axios from "axios"
import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"

export function AddVideo(){

    var navigate = useNavigate();
    var formik = useFormik({
        initialValues:{
            id:0,
            title:'',
            url:'',
            views:0,
            likes:0,
            subscribed:false
        },
        onSubmit:(newVideoDetails)=>{
           console.log(newVideoDetails);
           axios({
            method:"post",
            url:"http://127.0.0.1:5050/addvideo",
            data:newVideoDetails
           })
           .then(()=>{
            alert("Video Added Successfully");
            navigate("/managevideos");
           })
        }
    })

    return(
        <div>
                <h1>Add Video</h1>
                <form onSubmit={formik.handleSubmit}>
                    <dl>
                        <dt>Id</dt>
                        <dd><input type="number" name="id" onChange={formik.handleChange}/></dd>
                        <dt>Title</dt>
                        <dd><input type="text" name="title" onChange={formik.handleChange}/></dd>
                        <dt>Url</dt>
                        <dd><input type="text" name="url" onChange={formik.handleChange}/></dd>
                        <dt>Views</dt>
                        <dd><input type="number" name="views" onChange={formik.handleChange}/></dd>
                        <dt>Likes</dt>
                        <dd><input type="number" name="likes" onChange={formik.handleChange}/></dd>
                        <dt>Subscribed</dt>
                        <dd className="form-switch">
                            <input type="checkbox" name="subscribed" checked={formik.values.subscribed} onChange={formik.handleChange} className="form-check-input"/>
                        </dd>
                    </dl>
                    <button className="btn btn-success">Add Video</button>
                </form>
        </div>
    )
}
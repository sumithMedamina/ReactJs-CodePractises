import { useFormik } from "formik";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


export function EditVideoDetails(){
    var params = useParams();
    var navigate = useNavigate();
    const [video, setVideo]= useState([{
            id:0,
            title:'',
            url:'',
            views:0,
            likes:0,
            subscribed:false
    }]);

        useEffect(()=>{
            axios(({
                method:"get",
                url:`http://localhost:5050/video/${params.id}`
            }))
            .then(response =>{
                setVideo(response.data);
            })
            .catch(err =>{
                console.log(err);
            })
        })


    var formik = useFormik({
        initialValues:video[0],
        enableReinitialize:true,
        onSubmit:(editedVideoDetails)=>{
            axios({
                method:"put",
                url:`http://127.0.0.1:5050/updatevideo/${params.id}`,
                data:editedVideoDetails
            })
                alert("Details edited successfully");
                navigate("/managevideos");
            
        }
    })

    return(
        <div>
                <h1>Edit Details</h1>
                <form onSubmit={formik.handleSubmit}>
                    <dl>
                        <dt>Id</dt>
                        <dd><input contentEditable="true" type="number" name="id" value={formik.values.id} onChange={formik.handleChange}/></dd>
                        <dt>Title</dt>
                        <dd><input contentEditable="true" type="text" name="title" value={formik.values.title} onChange={formik.handleChange}/></dd>
                        <dt>Url</dt>
                        <dd><input contentEditable="true" type="text" name="url" value={formik.values.url} onChange={formik.handleChange}/></dd>
                        <dt>Views</dt>
                        <dd><input contentEditable="true" type="number" name="views" value={formik.values.views} onChange={formik.handleChange}/></dd>
                        <dt>Likes</dt>
                        <dd><input contentEditable="true" type="number" name="likes" value={formik.values.likes} onChange={formik.handleChange}/></dd>
                        <dt>Subscribed</dt>
                        <dd className="form-switch">
                            <input type="checkbox" name="subscribed" checked={formik.values.subscribed} onChange={formik.handleChange} className="form-check-input"/>
                        </dd>
                    </dl>
                    <button className="btn btn-success me-2">Save</button>
                    <Link to="/managevideos" className="btn btn-warning bi">Cancel</Link>
                </form>
        </div>
    )
}
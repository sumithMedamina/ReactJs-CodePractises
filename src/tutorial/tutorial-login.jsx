import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";


export function TutorialLogin(){

    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues:{
            userId:"",
            password:""
        },
        onSubmit:(customer)=>{
                axios({
                    method:"get",
                    url:"http://localhost:5050/customers"
                }).then((response) =>{
                    setUsers(response.data);
                }).then(()=>{
                    console.log(users);
                    for(var user of users){

                        if(user.userId===customer.userId&&user.password===customer.password){
                                navigate("/videos");
                                break;
                        }
                        else{
                            navigate("/error");
                        }
                    }
                }

                )
        }
    })

    return(
        <div>
                <h2>Login</h2>
              <form onSubmit={formik.handleSubmit}>
              <dl>
                    <dt >UserId</dt>
                    <dd ><input className="form-control w-25" type="text" name="userId" onChange={formik.handleChange}/></dd>
                    <dt >Password</dt>
                    <dd><input className="form-control w-25" type="text" name="password" onChange={formik.handleChange}/></dd>
                </dl>
                <button type="submit" className="btn btn-primary">Login</button>
                <p>
                    <Link to="/register">New user? Register</Link>
                </p>
              </form>
        </div>
    )
}
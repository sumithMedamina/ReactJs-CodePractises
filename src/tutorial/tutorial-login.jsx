import axios from "axios";
import { useFormik } from "formik";
import {Link, useNavigate} from "react-router-dom";
import { useCookies } from "react-cookie";


export function TutorialLogin(){

    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies();


    const formik = useFormik({
        initialValues:{
            userId:"",
            password:""
        },
        onSubmit:(customer)=>{
                axios({
                    method:"get",
                    url:"http://localhost:5050/customers"
                })
                // .then((response) =>{
                //     setUsers(response.data);
                //     console.log(users);
                //     for(var user of users){

                //         if(user.userId===customer.userId&&user.password===customer.password){
                //                 navigate("/videos");
                //                 break;
                //         }
                //         else{
                //             navigate("/error");
                //         }
                //     }
                // })
                .then((response)=>{
                    for(var user of response.data){

                        if(user.userId===customer.userId&&user.password===customer.password){
                            setCookie("userId",customer.userId,{expires:new Date('2024-07-15 23:33:42')});
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
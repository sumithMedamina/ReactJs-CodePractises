import axios from "axios";
import { useFormik} from "formik";
import { useState } from "react";
import { useNavigate, Link} from "react-router-dom";



export function TutorialRegister(){

    const navigate = useNavigate();
    const [customers,setCustomers] = useState([]);
    const [userIdError,setUserIdError] = useState('');
    const [userIdStyle,setUserIdStyle] = useState('');

const formik =useFormik({
    initialValues:{
        userId: "",
        userName: "",
        password: "",
        age: 0,
        email: "",
        mobile: ""
    },
    onSubmit:(customerDetails) =>{
       axios({
          method:"post",
          url:"http://localhost:5050/register-customer",
          data: customerDetails
       }).then(()=>{
        alert("user registered successfully");
        navigate("/login")
       }).catch(err =>{
        console.log(err);
       })
    }
})

function verifyUserId(e){
  axios({
    method:"get",
    url:"http://localhost:5050/customers"

  }).then(response =>{
    setCustomers(response.data);
    
    for(var customer of customers){
        if(customer.userId===e.target.value){
                setUserIdError("User-Id is taken-Try Another.");
                setUserIdStyle('text-danger');
                break;
        }else{
            
            setUserIdError("User-Id is available");
            setUserIdStyle('text-success');
        }
    }
  })
}

    return(
        <div>
                <h2>Registration</h2>
                <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt className="text-primary">UserId</dt>
                    <dd><input className="form-control w-25" type="text" onKeyUp={verifyUserId} name="userId" onChange={formik.handleChange}/></dd>
                    <dd className={userIdStyle}>{userIdError}</dd>
                    <dt className="text-primary">UserName</dt>
                    <dd><input className="form-control w-25"  type="text" name="userName" onChange={formik.handleChange}/></dd>
                    <dt className="text-primary">Password</dt>
                    <dd><input className="form-control w-25" type="text" name="password" onChange={formik.handleChange}/></dd>
                    <dt className="text-primary">Age</dt>
                    <dd><input className="form-control w-25" type="number" name="age" onChange={formik.handleChange}/></dd>
                    <dt className="text-primary">Email</dt>
                    <dd><input className="form-control w-25" type="text" name="email" onChange={formik.handleChange}/></dd>
                    <dt className="text-primary">Mobile</dt>
                    <dd><input className="form-control w-25" type="text" name="mobile" onChange={formik.handleChange}/></dd>
                </dl>
                <button className="btn btn-outline-primary" type="submit">Register</button>
                <p>
                    <Link to="/login">Existing User Login</Link>
                </p>
                </form>
        </div>
    )
}
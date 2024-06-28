import axios from "axios";
import { useFormik} from "formik";



export function TutorialRegister(){

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
       }).catch(err =>{
        console.log(err);
       })
    }
})

    return(
        <div>
                <h2>Registration</h2>
                <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt className="text-primary">UserId</dt>
                    <dd><input className="form-control w-25" type="text" name="userId" onChange={formik.handleChange}/></dd>
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
                </form>
        </div>
    )
}
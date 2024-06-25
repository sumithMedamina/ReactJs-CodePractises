import { useFormik } from "formik";
import * as yup from "yup" ;

export function YupDemo(){

    const formik = useFormik({
        initialValues:{
            "UserName":"",
            "Age":0,
            "City":"",
            "Mobile":""
        },
        onSubmit: (values)=> {
           alert(JSON.stringify(values));
        },
        validationSchema: yup.object({
                "UserName":yup.string()
                        .required("User Name Required..")
                        .min(4,"Name too short..")
                        .max(10,"Name too Long.."),
                "Age":yup.number()
                        .required("Age Required"),
                "Mobile":yup.string()
                            .required("Mobile Required")
                            .matches(/^(?:(?:\+|0{0,2})91(\s*|[-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/,"Invalid Mobile Number +91 with 10 digits")
        })
    })

    return (
        <div className="container-fluid">
          <h2>Register - Formik Yup</h2>
          <form onSubmit={formik.handleSubmit}>
            <dl>
              <dt>UserName</dt>
                                            { /* we can write like this also for all events*/}
              <dd><input type="text" name="UserName" {...formik.getFieldProps("UserName")}/></dd> 
              <dd className="text-danger">{formik.errors.UserName}</dd>
              <dt>Age</dt>
              <dd><input type="text" name="Age" {...formik.getFieldProps("Age")}/></dd>
              <dd className="text-danger">{formik.errors.Age}</dd>
              <dt>City</dt>
                <dd>
                  <select name="City" onChange={formik.handleChange}>
                    <option value="-1">Choose-City</option>
                    <option value="DELHI">DELHI</option>
                    <option value="HYD">HYD</option>
                  </select>
                </dd>
                <dd className="text-danger"></dd>
              <dt>Mobile</dt>
              <dd><input type="number" name="Mobile" onChange={formik.handleChange}/></dd>
              <dd className="text-danger">{formik.errors.Mobile}</dd>
            </dl>
            <button>Register</button>
          </form>
        </div>
      );

}
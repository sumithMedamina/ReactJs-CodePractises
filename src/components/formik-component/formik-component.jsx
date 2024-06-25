import { Formik,Form,Field,ErrorMessage} from "formik";
import * as yup from "yup";

export function FormikComponennt(){
    return(
        <div className="container-fluid">
            <h2>Fromik Components</h2>
            <Formik
            initialValues={
               {
                 "UserName":"",
                "Age":0,
                "City":"",
                "Mobile":""
               }
            }

            onSubmit={(values)=>{
                alert(JSON.stringify(values));
            }}

            validationSchema={yup.object({
                "UserName": yup.string()
                            .required("UserName Required")
                            .min(4,"UserName is too short...")
                            .max(10,"UserName is too long..."),
                "Age":yup.number()
                           .required("Age Required"),
                "Mobile":yup.string()
                                    .required("Mobile Number Required")
                                    .matches(/^(?:(?:\+|0{0,2})91(\s*|[-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/,"Invalid Mobile Number +91 with 10 digits")
            })}
            >
                    {
                        props =>
                            <Form>
                                <dl>
                                    <dt>User Name</dt>
                                    <dd><Field type="text" name="UserName"/></dd>
                                    <dd className="text-danger"><ErrorMessage name="UserName"/></dd>
                                    <dt>Age</dt>
                                    <dd><Field type="text" name="Age"/></dd>
                                    <dd className="text-danger"><ErrorMessage name="Age"/></dd>
                                    <dt>City</dt>
                                    <dd>
                                        <Field as="select" name="City">
                                            <option >Choose City</option>
                                            <option>Delhi</option>
                                            <option>HYD</option>
                                        </Field>
                                    </dd>
                                    <dt>Mobile</dt>
                                    <dd><Field type="text" name="Mobile"/></dd>
                                    <dd className="text-danger"><ErrorMessage name="Mobile"/></dd>
                                </dl>
                                <button type="submit" disabled={!props.isValid}>Register</button>
                            </Form>
                    }
            </Formik>
        </div>
    )
}
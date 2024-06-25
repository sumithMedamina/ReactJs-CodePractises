import { useFormik } from "formik";

export function FormikDemo() {
  function userValidation(formBody) {
    var errors = {};

    if (formBody.UserName === "") {
      errors.UserName = "User Name Required";
    } else if (formBody.UserName.length < 4) {
      errors.UserName = "User Name too short minimum 4 chars required";
    } else {
      errors.UserName = "";
    }

    if (isNaN(formBody.Age)) {
      errors.Age = "Age must be number";
    } else {
      errors.Age = "";
    }

    if (formBody.City === "-1") {
      errors.City = "Please Select Your City";
    } else {
      errors.City = "";
    }

    if (formBody.Mobile.match(/\+91\d{10}/)) {
      errors.Mobile = "";
    } else {
      errors.Mobile = "Invalid Mobile";
    }

    return errors;
  }

  const formik = useFormik({
    initialValues: {
      UserName: "", //MODEL BINDING
      Age: 0,
      City: "",
      Mobile: "",
    },
    validate: userValidation,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <div className="container-fluid">
      <h2>Register-Formik Form</h2>
      <form onSubmit={formik.handleSubmit}>
        <dl>
          <dt>UserName</dt>
          <dd>
            <input type="text" name="UserName" onChange={formik.handleChange} />
          </dd>
          <dd className="text-danger">{formik.errors.UserName}</dd>
          <dt>Age</dt>
          <dd>
            <input type="text" name="Age" onChange={formik.handleChange} />
          </dd>
          <dd className="text-danger">{formik.errors.Age}</dd>
          <dt>City</dt>
          <dd>
            <select name="City" onChange={formik.handleChange}>
              <option value="-1">Choose-City</option>
              <option value="DELHI">DELHI</option>
              <option value="HYD">HYD</option>
            </select>
          </dd>
          <dd className="text-danger">{formik.errors.City}</dd>
          <dt>Mobile</dt>
          <dd>
            <input type="number" name="Mobile" onChange={formik.handleChange} />
          </dd>
          <dd className="text-danger">{formik.errors.Mobile}</dd>
        </dl>
        <button>Register</button>
      </form>
    </div>
  );
}

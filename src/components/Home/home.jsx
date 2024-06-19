// import { LoginComponent } from "../../customized-components/login/login";

import { useState } from "react";
import { GridComponent } from "../../customized-components/grid/grid-component";

export function HomeComponent(){

    const [employeesData] = useState([{
    firstName:"Satish",
    lastName:"Kumar",
    salary:"97000.00"
    },
    {
        firstName:"Kiran",
        lastName:"Sharma",
        salary:"98000.00"
    }])

    const[products] = useState(
        [
            {
                name:"Iphone",
                price:"120000.00"
            },
            {
                name:"Samsung",
                price:"92000.00"
            }
        ]
    )

    return(
        <div className="container-fluid">
            {/* <h2>Admin Portal</h2>
            <LoginComponent theme="bg-warning" title="AdminLogin" login_id="Your Email" login_type="email" button_text="Admin Login"/>
            <h2>Customer Portal</h2>
            <LoginComponent theme="bg-success" title="CustomerLogin" login_id="Your Mobile" login_type="text" button_text="Customer SignIn"/> */}

            <GridComponent caption="Employee Table" fields={["First Name","Last Name","Salary"]} data={employeesData}/>
            <hr />
            <GridComponent caption="Products" fields={Object.keys(products[0])} data={products}/>
        </div>
    )
}
import {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom"

export function FakestoreHome(){

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        axios({
            method:"get",
            url:"https://fakestoreapi.com/products/categories"
        }).then(response =>{
            setCategories(response.data);
        })
    },[])

    return(
        <div className="mt-3">
           <h2>Categories</h2>
           <ol>
            {
                categories.map(category =>
                    <li key={category} style={{textTransform:'capitalize'}}>
                        <Link to={`/products/${category}`}>{category}</Link>
                    </li>
                )
            }
           </ol>
        </div>
    )
}
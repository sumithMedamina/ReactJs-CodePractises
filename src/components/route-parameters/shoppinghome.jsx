import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

export function ShoppingHome(){

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        axios({
            method:"get",
            url:"https://fakestoreapi.com/products/categories"
        })
        .then(response =>{
            setCategories(response.data);
        })
    },[])

    return(
        <div className="container-fluid">
            <h2>Categories</h2>
                <ol>
                    {
                        categories.map(category => 
                            <li key={category}><Link to={`/products/${category}`} style={{textTransform:"capitalize"}}>{category}</Link></li>
                        )
                    }
                </ol>
        </div>
    )
}

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


export function ShoppingProducts(){
    const params = useParams();
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios({
            method:"get",
            url:`https://fakestoreapi.com/products/category/${params.catName}`
        })
        .then((response) =>{
            setProducts(response.data);
        }
        )
    },[])

   

    return(
        <div container-fluid>
            <h2 style={{textTransform:"capitalize"}}>{params.catName} Products</h2>
            <div className="d-flex">
            {
                products.map(product =>
                            <div key={product.id} className="border border-2 border-primary me-2"> 
                                <Link to={`/details/${product.id}`}><img className="me-2" src={product.image} height="150" width="150"alt="" /></Link>
                            </div>
                )
            }
            </div>
            <div className="mt-3">
            <strong><Link to="/home">Back to categories</Link></strong>
            </div>
        </div>
    )
}
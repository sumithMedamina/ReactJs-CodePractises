import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export function ShoppingDetails(){

    const params = useParams();
    const [productDetails, setProductDetails] = useState({id:0, title:'',price:0, category:'',rating:{rate:0,count:0}});

    useEffect(() =>{
        axios({
            method:"get",
            url:`https://fakestoreapi.com/products/${params.prodID}`
        })
        .then((response)=>{
            setProductDetails(response.data);
        })
    })
    return(
        <div className="container-fluid">
            <h2>Product Details</h2>
            <dl>
                <dt>Title</dt>
                <dd>{productDetails.title}</dd>
                <dt>Preview</dt>
                <dd><img src={productDetails.image} height="100" width="100" alt="" /></dd>
                <dt>Price</dt>
                <dd>{productDetails.price}</dd>
                <dt>Rating</dt>
                <dd><span className="bi bi-star-fill text-success"></span>{productDetails.rating.rate}[{productDetails.rating.count}]</dd>
            </dl>
            <div className="mt-3">
            <strong><Link to={`/products/${productDetails.category}`}>Back to Products</Link></strong>
            </div>
         </div>
    )
}
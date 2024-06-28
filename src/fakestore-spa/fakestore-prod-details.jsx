import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";





export function FakeStoreProductDetails(){

const params = useParams();
const [product,setProducts] = useState({});

useEffect(()=>{
    axios({
        method:"get",
        url:`https://fakestoreapi.com/products/${params.prodId}`
    }).then(response =>{
        setProducts(response.data);
    })
},[params.prodId])

return(
    <div>
        <h2>Product Details</h2>
        <dl>
            <dt>Preview</dt>
            <dd><img src={product.image} height="200" width="200" alt="" /></dd>
            <dt>Price</dt>
            <dd>{product.price}</dd>
        </dl>
    </div>
)
}
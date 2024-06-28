import axios from "axios";
import { useState, useEffect} from "react";
import { useParams, Link, Routes, Route } from "react-router-dom";
import { FakeStoreProductDetails } from "./fakestore-prod-details";

export function FakestoreProduct(){

    const params = useParams();
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        axios({
            method:"get",
            url:`https://fakestoreapi.com/products/category/${params.catName}`
        })
        .then(response =>{
            setProducts(response.data);
        })
    })


    return(
        <div>
            <div className="row">
                <div className="col-6">
                <h2 style={{textTransform:'capitalize'}}>{params.catName} Products</h2>
                        <ol>
                            {
                                products.map(product =>
                                    <li key={product.id}>
                                        <Link to={`details/${product.id}`}>{product.title}</Link>
                                    </li>
                                )
                             }
                        </ol>   
                </div>
                <div className="col-6">
                    <Routes>
                            <Route path="details/:prodId" element={<FakeStoreProductDetails/>}></Route>
                    </Routes>
                </div>
        </div>
                <strong><Link to="/home">Back to Categories</Link></strong>
    </div>
    )
}
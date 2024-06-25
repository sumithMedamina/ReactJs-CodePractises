import axios from "axios"
import { useState, useEffect } from "react"

export function ShoppingHome(){

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios({
            method:"get",
            url:"https://fakestoreapi.com/products"
        })
        .then(response =>{
            setProducts(response.data);
        })
    },[])

    return(
        <div className="container-fluid">
                <div className="d-flex flex-wrap">
                    {
                            products.map((product) =>
                            <div className="card p-2 m-2" key={product.id} style={{width:'300px'}}>
                                    <img src={product.image} alt="" height="240" className="card-img-top"/>
                                    <div className="card-card-title" style={{height:'240px'}}>
                                        <p>{product.title}</p>
                                    </div>
                            </div>
                            )
                    }
                </div>
        </div>
    )
}

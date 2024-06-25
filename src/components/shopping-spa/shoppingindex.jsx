import { useState, useEffect} from "react";
import axios from "axios";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { ShoppingHome } from "./shoppinghome";


export function ShoppingIndex(){
    const [categories,setCategories] = useState([]);
    const [biClasses] = useState(["bi bi-person-fill","bi bi-heart","bi bi-search","bi bi-cart"])

    useEffect(() =>{
        axios({
              method:"get",
              url:"https://fakestoreapi.com/products/categories"
        })
        .then(response =>{
            setCategories(response.data);
        })
    },[])
    return(
        <div className="">
           <BrowserRouter>
           <header className="d-flex justify-content-between text-white bg-dark p-3">
                <div>Shopper.</div>
                <div>
                    <span className="me-5"><Link to="home" className="text-white text-decoration-none">Home</Link></span>
                    {
                            categories.map((category) => 
                                <span key={category} className="me-5"><Link className="text-white text-decoration-none">{category.charAt(0).toUpperCase() + category.slice(1)}</Link></span>
                            )
                    }
                </div>
                <div>
                    {
                        biClasses.map((bi,index) => 
                            <span key={index} className={`${bi} me-3`} style={{'marginRight':"5px"}}></span>
                        )
                    }
                </div>
           </header>
           <section className="mt-3 overflow-auto" style={{height:'100vh'}}>
                <Routes>
                    <Route path="/" element={<ShoppingHome/>}></Route>
                    <Route path="home" element={<ShoppingHome/>}></Route>
                    <Route path="*" element={<div><h2 className="text-danger">Requested Path Not Found</h2></div>}></Route>
                </Routes>
           </section>
           </BrowserRouter>
        </div>
    )
}
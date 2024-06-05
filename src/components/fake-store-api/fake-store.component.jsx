import {useEffect, useState} from "react";
import "./fake-store.component.css"

export function ShopifyComponent(){

    const [categories ,setCategories] = useState([]);
    const [products ,setProducts] = useState([]);

    function LoadProducts(url){
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setProducts(data);
    })
        .catch(error => console.log(error))
    }

    function LoadCategories(){
        fetch("http://fakestoreapi.com/products/categories")
        .then(response => response.json())
        .then(data => {
            data.unshift("all");
            setCategories(data);
    })
        .catch(error => console.log(error))
    }
    
    function handleCategoryChange(event){
        if(event.target.value==="all") LoadProducts("http://fakestoreapi.com/products");
        else LoadProducts(`http://fakestoreapi.com/products/category/${event.target.value}`);
    }

    function handleOnClickCategoryChange(event){
        const category = event.target.getAttribute("data-value");
        if(category==="all") LoadProducts("http://fakestoreapi.com/products");
        else LoadProducts(`http://fakestoreapi.com/products/category/${category}`);
    }

    useEffect(()=>{
        LoadCategories();
        LoadProducts("http://fakestoreapi.com/products");
    },[]);

    return(
        <div className="container-fluid p-0">
            <header className="d-flex justify-content-between p-2 mt-1 bg-info text-white">
                <div><h2>Shopify</h2></div>
                <div className="mt-2">
                {
                    categories.map(category => {
                        return(
                            <span onClick={handleOnClickCategoryChange} data-value={category} className="me-4">{category.charAt(0).toUpperCase()+ category.slice(1)}</span>
                        )
                    })
                }
                </div>
                <div>
                    <span className="bi bi-search me-4"></span>
                    <span className="bi bi-heart me-4"></span>
                    <span className="bi bi-person me-4"></span>
                    <span className="bi bi-cart me-4"></span>
                </div>
            </header>
            <section className=" mx-2 mt-2 row">
                <nav className="col-2">
                       <label className="form-label">Select Category</label>
                       <select  onChange={handleCategoryChange} className="form-select">
                        {
                            categories.map(category =>{
                                return(
                                    <option key={category} value={category}>
                                        {category.toUpperCase()}
                                    </option>
                                )
                            })
                        }
                       </select>
                </nav>
                <main className="col-10 d-flex flex-wrap">
                        {
                            products.map(product =>{
                                return(
                                    <div key={product.id} className="card m-2 p-2">
                                        <img  src={product.image} height="200" className="card-img-top" alt="" />
                                        <div className="card-header bg-white">
                                             <p className="card-title">{product.title}</p>
                                        </div>
                                        <div className="card-body">
                                            <dl >
                                            <dt>Price</dt>
                                            <dd>$ {product.price}</dd>
                                            <dt>Rating</dt>
                                            <dd> <span className="bi bi-star-fill text-warning"></span> [{product.rating.rate}]</dd>
                                            </dl>
                                        </div>
                                        <button className="btn btn-info">Add to cart </button>
                                    </div>
                                )
                            })
                        
                        }
                </main>
            </section>
        </div>
    )

}
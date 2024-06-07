import React, { useEffect, useState } from "react";
import "./fake-store.component.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import $ from "jquery";
import axios from "axios";

export function ShopifyComponent() {

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        getCartCount();
    }, [cartItems]); // Update cart count whenever cart items change

    function getCartCount() {
        setCartCount(cartItems.length);
    }

    function LoadProducts(url) {
        $.ajax({
            method:"get",
            url:url,
            success: response => setProducts(response),
            error:response => console.log(response.statusText)
        })

        // fetch(url)
        //     .then(response => response.json())
        //     .then(data => {
        //         setProducts(data);
        //     })
        //     .catch(error => console.log(error));
    }

    function LoadCategories() {
        axios.get("http://fakestoreapi.com/products/categories")
        .then(response => {
            response.unshift("all");
            setCategories(response.data);
        })
        .catch(error => console.log(error));
            //    $.ajax({
            //     method:"get",
            //     url:"http://fakestoreapi.com/products/categories",
            //     success:( response =>{
            //         response.unshift("all");
            //         setCategories(response);
            //     }),
            //     error: (response =>{
            //         console.log(response.statusText);
            //     })
            //    })

        // fetch("http://fakestoreapi.com/products/categories")
        //     .then(response => response.json())
        //     .then(data => {
        //         data.unshift("all");
        //         setCategories(data);
        //     })
        //     .catch(error => console.log(error));
    }

    function handleCategoryChange(event) {
        if (event.target.value === "all") LoadProducts("http://fakestoreapi.com/products");
        else LoadProducts(`http://fakestoreapi.com/products/category/${event.target.value}`);
    }

    function handleOnClickCategoryChange(event) {
        const category = event.target.getAttribute("data-value");
        if (category === "all") LoadProducts("http://fakestoreapi.com/products");
        else LoadProducts(`http://fakestoreapi.com/products/category/${category}`);
    }

    function handleAddToCartClick(event) {
        fetch(`http://fakestoreapi.com/products/${event.target.id}`)
            .then(response => response.json())
            .then(data => {
                setCartItems(prevCartItems => [...prevCartItems, data]); // Use functional state update
            })
            .catch(error => console.log(error));
    }

    function handleDeleteFromCart(event) {
        const itemId = parseInt(event.target.id); // Convert id to number if necessary
        setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== itemId)); // Update state with new array
    }

    useEffect(() => {
        LoadCategories();
        LoadProducts("http://fakestoreapi.com/products");
    }, []);

    return (
        <div className="container-fluid p-0">
            <header className="d-flex justify-content-between p-2 bg-info text-white">
                <div><h2>Shopify</h2></div>
                <div className="mt-2">
                    {
                        categories.map(category => (
                            <span key={category} onClick={handleOnClickCategoryChange} data-value={category} className="me-4">
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </span>
                        ))
                    }
                </div>
                <div>
                    <span className="bi bi-search me-4"></span>
                    <span className="bi bi-heart me-4"></span>
                    <span className="bi bi-person me-4"></span>
                    <button data-bs-target="#cart" data-bs-toggle="modal" className="btn btn-light position-relative">
                        <span className="bi bi-cart me-4"></span>
                        <span className="badge rounded-circle bg-danger position-absolute">{cartCount}</span>
                    </button>
                    <div className="modal fade" id="cart">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h2 className="text-primary">Your Cart Items</h2>
                                    <button data-bs-dismiss="modal" className="btn btn-close"></button>
                                </div>
                                <div className="modal-body">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Title</th>
                                                <th>Preview</th>
                                                <th>Price</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cartItems.map(item => (
                                                    <tr key={item.id}>
                                                        <td>{item.title}</td>
                                                        <td><img src={item.image} height="50px" width="50px" alt="" /></td>
                                                        <td>{item.price}</td>
                                                        <td><button id={item.id} onClick={handleDeleteFromCart} className="btn btn-danger bi bi-trash"></button></td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="mx-2 mt-2 row">
                <nav className="col-2">
                    <label className="form-label">Select Category</label>
                    <select onChange={handleCategoryChange} className="form-select">
                        {
                            categories.map(category => (
                                <option key={category} value={category}>
                                    {category.toUpperCase()}
                                </option>
                            ))
                        }
                    </select>
                </nav>
                <main className="col-10 d-flex flex-wrap">
                    {
                        products.map(product => (
                            <div key={product.id} className="card mt-3 mx-2">
                                <img src={product.image} height="200" className="card-img-top" alt="" />
                                <div className="card-header bg-white">
                                    <p className="card-title">{product.title}</p>
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>$ {product.price}</dd>
                                        <dt>Rating</dt>
                                        <dd> <span className="bi bi-star-fill text-warning"></span> [{product.rating.rate}]</dd>
                                    </dl>
                                </div>
                                <div className="card-footer">
                                    <button onClick={handleAddToCartClick} id={product.id} className="btn btn-info w-100">Add to cart</button>
                                </div>
                            </div>
                        ))
                    }
                </main>
            </section>
        </div>
    );
}

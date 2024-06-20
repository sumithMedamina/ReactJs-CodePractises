import React from "react";

export class FakeStoreClass extends React.Component
{
    constructor(){
        super();
        this.state ={
            products:[]
        }
    }

    componentDidMount(){
        fetch('http://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => 
            this.setState({
                products:data
            })
        )
    }

    render(){
        return(
            <div className="container-fluid">
                <h2>FakeStore Produts</h2>
                <ol>
                    {
                        this.state.products.map(product => 
                            <li key={product.id}>{product.title}</li>
                        )
                    }
                </ol>
            </div>
        )
    }
    
}
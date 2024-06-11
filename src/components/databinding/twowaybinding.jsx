import { useState } from "react";

// export function TwoWayBinding(){
//     const[userName, setUserName] = useState('jhon');

//     function handleNameChange(event){
//         setUserName(event.target.value);
//     }

//     return(
//         <div className="container-fluid">
//             <dl>
//                 <dt>UserName</dt>
//                 <dd>
//                     <input type="text" value={userName} onChange={handleNameChange}/>
//                 </dd>
//                 <p>Hello ! {userName}</p>
//             </dl>
//         </div>
//     )
// }

export function TwoWayBinding(){
    const [product,setProudct] =useState({Name:'',Price:0,City:'',Stock:false});
    function handleNameChange(e){
        setProudct({
            Name:e.target.value,
            Price:product.Price,
            City:product.City,
            Stock:product.Stock
        })
    }
    function handlePriceChange(e){
        setProudct({
            Name:product.Name,
            Price:e.target.value,
            City:product.City,
            Stock:product.Stock
        })
    }
    function handleCityChange(e){
        setProudct({
            Name:product.Name,
            Price:product.Price,
            City:e.target.value,
            Stock:product.Stock
        })
    }
    function handleStockChange(e){
        setProudct({
            Name:product.Name,
            Price:product.Price,
            City:product.City,
            Stock:e.target.checked
        })
    }
    return(
        <div className="container-fluid">
            <div className="row">
                <nav className="col-3">
                        <dl>
                            <dt>Name</dt>
                            <dd>
                                <input type="text"  className="form-control" onChange={handleNameChange}/>
                            </dd>
                            <dt>Price</dt>
                            <input type="text"  className="form-control" onChange={handlePriceChange}/>
                            <dt>City</dt>
                            <dd>
                                <select className="form-select" onChange={handleCityChange}>
                                    <option>Hyd</option>
                                    <option>Delhi</option>
                                    <option>Mumbai</option>
                                </select>
                            </dd>
                            <dt>Stock</dt>
                            <dd className="form-switch">
                                <input type="checkbox" className="form-check-input" onChange={handleStockChange}/>Available
                            </dd>
                        </dl>
                </nav>
                <main className="col-9">
                    <h2>Details</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd>{product.Name}</dd>
                        <dt>Price</dt>
                        <dd>{product.Price}</dd>
                        <dt>City</dt>
                        <dd>{product.City}</dd>
                        <dt>Stock</dt>
                        <dd>{(product.Stock===true?"Availble":"Out of stock")}</dd>
                    </dl>

                </main>
            </div>
        </div>
    )
}
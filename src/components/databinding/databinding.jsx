
export function DataBinding(){
    // let id = 1;
    // let name = "iphone";
    // let price = 100000.00
    // let stock = true;
    // let product ={
    //     "id":1,
    //     "name":"iphone",
    //     "price":99999.99,
    //     "stock":true
    // }
    // return(
    //       <div className="container-fluid">
    //         <h2>Product Details</h2>
    //         <dl>
    //             <dt>Product Id</dt>
    //             <dd>{product.id}</dd>
    //             <dt>Name</dt>
    //             <dd>{product.name}</dd>
    //             <dt>Price</dt>
    //             <dd>{product.price}</dd>
    //             <dt>stock</dt>
    //             <dd>{(product.stock ? "Available" : "Not-Available  ")}</dd>
    //         </dl>
    //       </div>
    // )
    var categories =["Electronics","Footwear","Fashion"];
    return(
        <div className="container-fluid">
            <h2>Categories</h2>
            <ul className="list-unstyled">
                {
                    categories.map((c)=>
                    <li key={c}><a href="#a">{c}</a></li>
                    )
                }
            </ul>
            <div>
               {
                    categories.map(c => (
                        <button key={c} className="btn btn-dark d-block mb-2 w-25"> {c} </button>
                    ))
                }
               </div>
            <ul className="list-list-unstyled">
                {categories.map(c => (
                    <li key={c}><input type="checkbox" />{c}</li>
                ))}
            </ul>
            <ol>
                {
                  categories.map((category)=>
                        <li key={category}>{category}</li>
                    )
                }
            </ol>
            <select name="" id="">
                {
                    categories.map((category)=>
                        <option key={category}>{category}</option>
                    )
                }
            </select>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Categories</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categories.map((category)=>
                        <tr  key={category}>
                            <td>{category}</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
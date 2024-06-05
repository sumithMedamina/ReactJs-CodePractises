export function Db(){
    let data =[
        {"id":1,"name":"Iphone15ProMax","price":99999.99,"stock":true},
        {"id":2,"name":"Samsung-s22Ultra","price":88888.88,"stock":true},
        {"id":3,"name":"Dell-Monitor","price":77777.77,"stock":false},

    ]
    return (
        <div className="container-fluid">
            <h2>Product Table</h2>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                </tr>
                </thead>
                <tbody>
               {
                data.map((item)=>
                    <tr key={item.name}>
                      <td >{item.id}</td>
                      <td >{item.name}</td>
                      <td >{item.price}</td>
                      <td >{item.stock ? "Available":"NotAvailable"}</td>
                      <td>
                        <button className="btn btn-danger">
                            <span className="bi bi-trash"></span>
                        </button>
                      </td>
                   </tr>
                    )
               }
                </tbody>
            </table>
        </div>
    )
}


export function NestedIteration(){
    let menu = [
        {"category":"Electronics","Products":["Phones","Laptops"]},
        {"category":"Clothing","Products":["Jeans","Formals"]}
    ]
    let username = "sumith";
    return (
        <div className="container-fluid my-4">
            <div className="mt-4">
                User Name:<input type="text" value={username} />
            </div>
            <h2 className="text-center mb-4">Menu</h2>
            <ol className="list-group list-group-numbered">
                {
                    menu.map((item) => (
                        <li key={item.category} className="list-group-item">
                            <h5 className="mb-2">{item.category}</h5>
                            <ul className="list-group">
                                {
                                    item.Products.map((product, index) => (
                                        <li key={index} className="list-group-item list-group-item-action">
                                            {product}
                                        </li>
                                    ))
                                }
                            </ul>
                        </li>
                    ))
                }
            </ol>
            <hr />
            <select>
                {
                    menu.map((item)=>
                    <optgroup  label={item.category}>
                        {
                            item.Products.map((product)=>
                                <option>{product}</option>
                                )
                        }
                    </optgroup>
                    )
                }
            </select>
        </div>
    )

}
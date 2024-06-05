export function Drop() {
  const menu = [
    {
      category: "Appetizers",
      Products: ["Spring Rolls", "Garlic Bread", "Stuffed Mushrooms"],
    },
    {
      category: "Main Course",
      Products: ["Grilled Chicken", "Steak", "Vegetarian Pasta"],
    },
    {
      category: "Desserts",
      Products: ["Cheesecake", "Brownie", "Ice Cream"],
    },
    {
      category: "Beverages",
      Products: ["Coffee", "Tea", "Juice"],
    },
  ];
  return (
    <div>
      <div className="container-fluid d-flex justify-content-center">
        {menu.map((item) => (
          <div key={item.category} className="mx-4">
            <h4 className="mb-3">{item.category}</h4>
            <select className="form-select">
              <option value="">None</option>
              {item.Products.map((product) => (
                <option key={product} value={product}>
                  {product}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <div>
        <div className="container-fluid d-flex justify-content-center mt-5">
          {menu.map((item) => (
            <div key={item.category} className="mx-4">
              <h4 className="mb-3">{item.category}</h4>
              {item.Products.map((product) => (
                <div key={product} className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={product}
                    value={product}
                  />
                  <label className="form-check-label" htmlFor={product}>
                    {product}
                  </label>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="container-fluid d-flex flex-column justify-content-center m-5">

       <h2 className="d-flex justify-content-center" > Menu Table</h2>
        <table className="table table-striped">
          <thead>
            <tr>
               {
                menu.map((item) =>
                <th>{item.category}</th>
                )
               }
            </tr>
          </thead>
          <tbody>
          <tr>
            {menu.map((item, index) => (
              <td key={index}>
                {
                item.Products.map((product,idx)=>
                <div>
                    {product}
                </div>
                )
                }</td>
            ))}
          </tr>
        </tbody>
          </table>

        </div>

    </div>
  );
}

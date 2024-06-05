export function NetflixHeader(){
    return(
        <div className="d-flex justify-content-between p-3">
           <div>
                <h2>NETFLIX</h2>
            </div>
            <div>
           <div className="input-group me-2">
               <select className="me-2 form-select">
                  <option>Language</option>
               </select>
               <div >
               <button className="btn btn-danger">Signin</button>
               </div>
           </div>
           </div>
        </div>
    )
}
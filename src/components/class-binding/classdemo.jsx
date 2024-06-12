import { useState } from "react"

export function Sorting(){
    const [cities] = useState(["Hyd","Mumbai","Warangal","Vizag","Ameerpet"]);
    const[buttonClass, setButtonClass]=useState('bi bi-sort-alpha-down');
    

    function handleSortingArray(e){
if(e.target.className==="bi bi-sort-alpha-down"){
           setButtonClass('bi bi-sort-alpha-up');
           cities.sort();
}
else{
    setButtonClass('bi bi-sort-alpha-down');
    cities.reverse();
}
}
    
    return(
        <div className="container-fluid mt-2">
            <h2 className="mb-3">Sorting <button className=" btn btn-success"><span className={buttonClass} onClick={handleSortingArray}></span></button></h2>
            <ol>
                {
                    cities.map(city =>
                        <li key={city}>{city}</li>
                    )
                }
            </ol>
        </div>
    )
}
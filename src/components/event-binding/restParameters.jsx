export function RestParameters(){
    
    function InsertClick(...args){
       const [msg,obj] = args;
    document.write(`
        ${msg}<br>
        ${obj.Name}
        `)
    }
    return(
        <div className="container-fluid">
            <button onClick={()=>InsertClick("welcome",{'Name':'Sumith'})}>Insert</button>
        </div>
    )
    }
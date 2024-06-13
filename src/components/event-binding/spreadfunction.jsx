export function Spread(){
    
function InsertClick(msg,obj){
document.write(`
    ${msg}<br>
    ${obj.Name}
    `)
}
return(
    <div className="container-fluid">
        <button onClick={()=>InsertClick(...["welcome",{'Name':'Sumith'}])}>Insert</button>
    </div>
)
}

export function DefaultEventBinding(){

// function InsertClick(e){     //How to get default propertie values 

//     document.write(`
//          Button Id : ${e.target.id} <br>
//          Button Name : ${e.target.name} <br>
//          Button value : ${e.target.value} <br>
//          X postion : ${e.clientX} <br>
//          control key : ${e.ctrlKey}
//         `);
// }

// function InsertClick(e){      //How see all properties present in event argument

//     for(var property in e){
//         document.write(`
//             ${property} :${typeof e[property]} <br>
//            `);
//     }
// }

function InsertClick(msg,obj){       //Discarding the event arguments and sending custom
alert(obj.low + msg);
}

    return(
        <div className="container-fluid">
            <button id="Button Insert" name="Insert Button" value="button" onClick={() => InsertClick("rower",{
                'low' :'low'
            })}>Insert</button>
        </div>
    )
}
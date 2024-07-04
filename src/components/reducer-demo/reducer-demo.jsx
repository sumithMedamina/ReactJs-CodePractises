import { useReducer } from "react";

let initialState = {count:0};

function reducer(state, action){
    switch(action.type){
        case "join":
            return {count:state.count+1}
        case "exit":
            return {count:state.count-1}
    }
}


export function ReducerDemo(){

    const [state, dispatch] = useReducer(reducer, initialState);

    function handleJoinClick(){
        dispatch({
            type:'join'
        })
    }

    function handleExitClick(){
        dispatch({
            type:'exit'
        })
    }

    return(
        <div className="container-fluid">
          <h2>Video Streaming</h2>
          <div className="bg-primary text-white p-4 m-1 w-25">
            ...Buffering video..
          </div>
          <div className="mt-4 mb-4">
                    Live Count :{state.count}
          </div>
          <div className="mt-4">
            <button onClick={handleJoinClick}>Join</button>
            <button onClick={handleExitClick}>Exit</button>
          </div>
        </div>
    )
}
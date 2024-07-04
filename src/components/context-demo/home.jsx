import { useContext } from "react"
import { VideoComponent } from "./video-component"
import { UserDetailsContext } from "./context-demo";

export function HomeComponent(){

const context = useContext(UserDetailsContext);


    return(
       <div className="bg-warning p-2">
         <h2>Home Component - {context.UserName}</h2>
            <VideoComponent/>
       </div>
    )
}
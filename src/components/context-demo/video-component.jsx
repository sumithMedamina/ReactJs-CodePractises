import { useContext } from "react";
import { UserDetailsContext } from "./context-demo";

export function VideoComponent() {
    const context = useContext(UserDetailsContext);

  return (
    <div className="bg-danger">
      <h2>Video Component -{context.UserName}</h2>
    </div>
  );
}

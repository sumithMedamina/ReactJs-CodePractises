import { useCaptcha } from "../../custom-hooks/captcha";
import { useSentence} from "../../custom-hooks/case";
import UseQueue from  "../../custom-hooks/queue";
import useEffect from "react";
import "./login.css";

export function Login() {
  let captchaCode = useCaptcha();
  let title = useSentence('user LogiN');


  return (
    <div className="container-fluid">
          
      <form action="">
        <h2>{title}</h2>
        <dl>
          <dt>User Name</dt>
          <dd>
            <input type="text" />
          </dd>
          <dt>Password</dt>
          <dd>
            <input type="password" />
          </dd>
          <dt>Verify code <button className="btn" ><span className="bi bi-arrow-clockwise"></span></button></dt>
          <dd className="bg-success text-white text-center w-75 p-2">{captchaCode}</dd>
        </dl>
        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { CookiesProvider } from 'react-cookie';

import { Login } from './components/login/login.jsx';





function App() {
  return (
    <div className="">
        <CookiesProvider>
            <Login/>
        </CookiesProvider>
    </div>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { CookiesProvider } from 'react-cookie';

import { ContextDemo } from './components/context-demo/context-demo';





function App() {
  return (
    <div className="">
        <CookiesProvider>
            <ContextDemo/>
        </CookiesProvider>
    </div>
  );
}

export default App;

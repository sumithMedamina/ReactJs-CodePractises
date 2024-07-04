import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { CookiesProvider } from 'react-cookie';

import { ReducerDemo } from './components/reducer-demo/reducer-demo';





function App() {
  return (
    <div className="">
        <CookiesProvider>
            <ReducerDemo/>
        </CookiesProvider>
    </div>
  );
}

export default App;

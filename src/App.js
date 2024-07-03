import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.bundle.js';


import { CookiesProvider } from 'react-cookie';
import { TutorialIndex } from './tutorial/tutotial-index';
import { MuiDemo } from './components/mui-demo/mui-demo';





function App() {
  return (
    <div className="">
        <CookiesProvider>
            <MuiDemo/>
        </CookiesProvider>
    </div>
  );
}

export default App;

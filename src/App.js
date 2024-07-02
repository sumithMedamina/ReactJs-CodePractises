import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.bundle.js';


import { CookiesProvider } from 'react-cookie';
import { TutorialIndex } from './tutorial/tutotial-index';





function App() {
  return (
    <div className="">
        <CookiesProvider>
            <TutorialIndex/>
        </CookiesProvider>
    </div>
  );
}

export default App;

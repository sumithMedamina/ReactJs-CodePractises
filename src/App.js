import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { ShopifyComponent } from './components/fake-store-api/fake-store.component';
//import { StyleBinding } from "./components/style-binding/style.binding";


function App() {
  return (
    <div className="App">
      <ShopifyComponent/>
    </div>
  );
}

export default App;

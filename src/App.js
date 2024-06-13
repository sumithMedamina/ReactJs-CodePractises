import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { DefaultEventBinding } from './components/event-binding/defaultbindng';
import { Spread } from './components/event-binding/spreadfunction';
import { RestParameters } from './components/event-binding/restParameters';



function App() {
  return (
    <div className="">
      <RestParameters/>
    </div>
  );
}

export default App;

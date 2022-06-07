import logo from './logo.svg';
import './App.css';
import {Product} from "./components/Product/Product"
import { NavBar } from './components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
     <Product></Product>
    </div>
  );
}

export default App;

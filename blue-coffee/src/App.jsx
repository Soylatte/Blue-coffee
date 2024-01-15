import './App.css'
import { Link } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Latte from './images/Latte.jpg';
function App() {
  return (
      <div>
        <div>
        <h1><Link to="/"></Link>BLUE COFFEE</h1>
        <Navbar />
        </div>
        <img src={Latte} />
        </div>

  )
}

export default App;

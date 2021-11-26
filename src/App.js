import './App.css';
import Navbar from './Components/Navbar/Index';
import {BrowserRouter as Router} from 'react-router-dom';
import Sidebar from './Components/Sidebar';


function App() {
  return (
  <Router>
    <Navbar/>
    <Sidebar/>
  </Router>
  );
}

export default App;

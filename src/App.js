import './App.css';
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages';
import SignInPage from './Pages/signin';
import Navbar from './Components/Navbar/Index';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/signin" element={<SignInPage/>} />
     </Routes>
    </Router>
  );
}

export default App;

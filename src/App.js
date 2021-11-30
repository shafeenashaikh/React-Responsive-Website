import './App.css';
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages';
import SignInPage from './Pages/signin';

function App() {
  return (
    <Router>
     
      <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/signin" element={<SignInPage/>} />
     </Routes>
    </Router>
  );
}

export default App;

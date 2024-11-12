import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import ContactUs from './pages/Contact us';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route index element={<Home/>}></Route>
         <Route path='contact us' element={<ContactUs/>}></Route>
      </Routes> 
    </Router>
  
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import ContactUs from './pages/Contact us';
import Form  from './pages/Form';
import { BrowserRouter as Router,Routes,Route, Form } from 'react-router-dom';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route index element={<Home/>}></Route>
         <Route path='contact us' element={<ContactUs/>}></Route>
         <Route path='Add Recipe' element={<Form/>}></Route>
      </Routes> 
    </Router>
  
  );
}

export default App;

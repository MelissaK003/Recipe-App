import './App.css';
import React from 'react';
// import Recipelist from './components/Recipelist';
import Home from './pages/Home';
import ContactUs from './pages/Contact us';
import Form  from './pages/Form';
import Landing from './components/Landing'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    // <div> 
    //   < Recipelist />
    // </div>
    
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

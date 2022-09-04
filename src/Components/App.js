import React from 'react';
import Navbar from './Navbar';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Home from '../Pages/Home';
import Projects from '../Pages/Projects';
import { Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Projects" element={<Projects/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
      </div>
      
    </div>
  );
}

export default App;

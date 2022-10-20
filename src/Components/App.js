import React from 'react';
import Navigation from './Navigation';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Footer from './Footer';
import Projects from './Pages/Projects';
import { Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Projects" element={<Projects/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
      </div> 
      <Footer /> 
    </div>
  );
}

export default App;

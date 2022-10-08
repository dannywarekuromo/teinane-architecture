import React from 'react';
import Navigation from './Navigation/Navigation';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
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
    </div>
  );
}

export default App;

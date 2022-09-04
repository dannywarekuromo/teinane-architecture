import React from 'react';
import Navbar from './Navbar';
import './App.css';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Home from '../Pages/Home';
import Projects from '../Pages/Projects';


function App() {
  let page
  // eslint-disable-next-line default-case
  switch (window.location.pathname) {
    case "/": 
      page = <Home />
      break
    case "/About":
      page = <About />
      break
    case "/Contact":
      page = <Contact />
      break
    case "/Projects":
      page = <Projects />
      break
  }
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        {page}
      </div>
      
    </div>
  );
}

export default App;

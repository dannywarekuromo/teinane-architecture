import React, { useState, useRef, useEffect } from "react";
import Navigation from "./Navigation/Navigation";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Footer from "./Footer/Footer";
import Projects from "./Pages/Projects";
import MinimoOptique from "./Pages/MinimoOptique";
import SeaFront from "./Pages/SeaFront";
import CaneBack from "./Pages/CaneBack";
import CubicVolume from "./Pages/CubicVolume";
import CustomCursor from "./CustomCursor/CustomCursor";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  const [preloader, setPreloader] = useState(true);

  const [timer, setTimer] = useState(6);

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  }

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer(timer => timer-1);
    }, 1000)
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  return (
    <>
      <CustomCursor />
      {preloader ? (
        <div className="loader-wrapper">
          <span className="pulse"></span>
          <span className="pulse"></span>
          <span className="pulse"></span>
        </div>
      ) : (
        <div className="App">
          <Navigation />
          <div className="container" data-scroll-container >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/MinimoOptique" element={<MinimoOptique />} />
              <Route path="/SeaFront" element={<SeaFront />} />
              <Route path="/CaneBack" element={<CaneBack />} />
              <Route path="/CubicVolume" element={<CubicVolume />} />
            </Routes>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;

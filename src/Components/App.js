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

  const [timer, setTimer] = useState(7);

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
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
        <svg
          width="40%"
          height="40%"
          viewBox="0 0 480 373"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="arcs">
            <path
              className="arc-one"
              stroke="white"
              strokeWidth="02"
              d="M181.657 130.968C175.579 68.4177 228.864 8.82993 310.183 0.92844L310.28 1.92375C229.363 9.78614 176.641 69.0073 182.652 130.871L181.657 130.968Z"
            />
            <path
              className="arc-two"
              stroke="white"
              strokeWidth="02"
              d="M150.673 27.7054C207.372 0.600761 281.591 30.2919 316.829 104.004L315.926 104.436C280.863 31.0879 207.181 1.80037 151.104 28.6076L150.673 27.7054Z"
            />
          </g>

          <path
            className="circle"
            stroke="white"
            strokeWidth="02"
            d="M238 372C273.346 372 302 343.346 302 308C302 272.654 273.346 244 238 244C202.654 244 174 272.654 174 308C174 343.346 202.654 372 238 372ZM238 373C273.899 373 303 343.898 303 308C303 272.101 273.899 243 238 243C202.101 243 173 272.101 173 308C173 343.898 202.101 373 238 373Z"
          />
          <path
            className="line v-line"
            stroke="white"
            strokeWidth="02"
            d="M237 26L237 309H238L238 26H237Z"
          />
          <path
            className="line h-line"
            stroke="white"
            strokeWidth="02"
            d="M0 310L480 310V309L0 309V310Z"
          />
        </svg>
      </div>
      ) : (
      <div className="App">
        <Navigation />
        <div className="container" data-scroll-container>
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

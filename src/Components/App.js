import React from "react";
import Navigation from "./Navigation/Navigation";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Footer from "./Footer/Footer";
import Projects from "./Pages/Projects";
import Optima from "./Pages/Optima";
import JungleFever from "./Pages/JungleFever";
import LumberJack from "./Pages/LumberJack";
import CustomCursor from "./CustomCursor/CustomCursor";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CustomCursor />
        <Navigation />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Optima" element={<Optima />} />
            <Route path="/LumberJack" element={<LumberJack />} />
            <Route path="/JungleFever" element={<JungleFever />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

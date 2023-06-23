import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Portfolio1 from "./pages/Portfolio1";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/1" element={<Portfolio1 />} />
          <Route path="/portfolio/2" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

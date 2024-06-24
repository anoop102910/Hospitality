import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/home/Hotel";
import Layout from "./pages/Layout";
import Technology from "./pages/technology/Technology";
import About from "./pages/about/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/about-us" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;


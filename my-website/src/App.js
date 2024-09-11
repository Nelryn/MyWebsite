import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import './App.css';
import Navbar from "./components/Navbar/navbar";
import Footer from './components/Footer/footer';

import Home from "./pages";
import Profile from "./pages/profile";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

function App() {
  return (
    // <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>
    <Router>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;

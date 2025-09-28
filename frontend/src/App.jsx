// App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";

// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  // 🌙 Theme toggle state
  const [darkMode, setDarkMode] = useState(true);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      {/* Pass theme + toggle to Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Wrap all pages in theme class */}
      <div
        className={darkMode ? "dark-mode" : "light-mode"}
        style={{ minHeight: "80vh", padding: "20px", transition: "0.3s" }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

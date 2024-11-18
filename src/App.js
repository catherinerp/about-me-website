import React, { useState } from "react";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import "./App.css"; // Add your styles here

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const scriptURL = 'https://script.google.com/macros/s/AKfycbz_HlinAjPxJnHBNAWZiNYjhOdMNXKT25v-AHcqazIwePCFNPBBQIs9dqQza0oO3J4/exec';
    const form = new FormData(e.target);

    try {
      await fetch(scriptURL, { method: 'POST', body: form });
      setMessage("Message sent successfully!");
      setTimeout(() => setMessage(""), 5000);
      e.target.reset();
    } catch (error) {
      console.error("Error!", error.message);
    }
  };

  return (
    <div>
      {/* Header Section */}
      <div id="header">
        <div className="container">
          <nav>
            <img src="images/logo.png" alt="logo" />
            <ul id="sidemenu" style={{ right: menuOpen ? "0" : "-200px" }}>
              <li><a href="#header">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
              <i className="fa-solid fa-xmark" onClick={() => setMenuOpen(false)}></i>
            </ul>
            <i className="fa-solid fa-bars" onClick={() => setMenuOpen(true)}></i>
          </nav>
          <div className="header-text">
            <p>Software Engineer</p>
            <h1>
              Hi, I'm <span>Catherine</span>
            </h1>
          </div>
        </div>
      </div>

      <main id="services">
        <Services />
      </main>
      <main id="portfolio">
        <Portfolio />
      </main>
      <footer id="contact">
        <Contact />
      </footer>
      {/* Simplify to follow similar patterns */}
    </div>
  );
}

export default App;

import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
      <div id="header">
        <div className="container">
          <nav>
            <div className="logo-text">
                <h1>
                About <span>Me</span>
                </h1>
            </div>
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
  );
};

export default Header;

import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import "./App.css";

function App() {

  return (
    <div>
      <Header />
      <About />
      <main id="services">
        <Services />
      </main>
      <main id="portfolio">
        <Portfolio />
      </main>
      <footer id="contact">
        <Contact />
      </footer>
    </div>
  );
}

export default App;

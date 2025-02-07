import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg mt-3">
      <div className="container justify-content-md-center justify-content-end">
        
        {/* Mobile Menu Button */}
        <div className="menu-bar d-lg-none navbar-toggler">
          <button
            type="button"
            onClick={toggleNavbar} // Toggle state on click
            aria-controls="navbarNavAltMarkup"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Navbar Items */}
        <div
          className={`collapse navbar-collapse justify-content-center ${isOpen ? "show" : ""}`} 
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a className="nav-link px-0 active" href="#" onClick={() => setIsOpen(false)}>
              Home
            </a>
            <a className="nav-link px-0" href="#about-me" onClick={() => setIsOpen(false)}>
              About Me
            </a>
            <a className="nav-link px-0" href="#skills" onClick={() => setIsOpen(false)}>
              Skills
            </a>
            <a className="nav-link px-0" href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>
            <a className="nav-link px-0" href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

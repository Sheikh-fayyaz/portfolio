import React from "react";

export default function Footer() {
  return (
    <footer className="footer section-padY py-0">
      <div className="container">
      <div className="primary-bg rounded-top-4 p-md-5 p-4">
      <ul className="d-flex flex-wrap justify-content-center list-unstyled mb-0">
        <li>
          <a className="nav-link mx-3 mb-md-0 mb-2" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="nav-link mx-3 mb-md-0 mb-2" href="#about-me">
            About Me
          </a>
        </li>
        <li>
          <a className="nav-link mx-3 mb-md-0 mb-2" href="#skills">
            Skills
          </a>
        </li>
        <li>
          <a className="nav-link mx-3 mb-md-0 mb-2" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="nav-link mx-3 mb-md-0 mb-2" href="#contact">
            Contact
          </a>
        </li>
      </ul>
      </div>
      </div>
    </footer>
  );
}

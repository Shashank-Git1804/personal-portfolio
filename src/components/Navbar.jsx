import React, { useState } from "react";
import "../styles/Navbar.css";
import { FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineBars2 } from "react-icons/hi2";
import { VscClose } from "react-icons/vsc";

const Navbar = (prop) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="new-navbar">
        <div className="title">
          <a href="#hero" className="new-navbar-title">
            SK
          </a>
        </div>
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <VscClose className="i-con" />
          ) : (
            <HiOutlineBars2 className="i-con" />
          )}
        </div>
      </nav>

      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        <ul className="menu-links">
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About Me!
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
        <div className="social-icons">
          <a
            href={prop.socialMedia.github} 
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href={prop.socialMedia.linkedin} 
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;

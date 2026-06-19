import "./Navbar.css";
import { useState } from "react";

function Navbar() {

  const [showMenu, setShowMenu] = useState(false);

  function handleMenu() {
    setShowMenu(!showMenu);
  }

  function closeMenu() {
    setShowMenu(false);
  }

  return (
    <nav className="navbar">

      <h2 className="logo">PORTFOLIO</h2>

      <div className="toggle" onClick={handleMenu}>
        {
          showMenu
            ? <i className="bi bi-x-lg"></i>
            : <i className="bi bi-list"></i>
        }
      </div>

      <ul className={showMenu ? "nav-links active" : "nav-links"}>

        <li>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
        </li>

        <li>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </li>

        <li>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
        </li>

        <li>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
        </li>

        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;
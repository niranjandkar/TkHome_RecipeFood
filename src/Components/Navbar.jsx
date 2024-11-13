import React from "react";
import { Link } from "react-router-dom";
import "../Styling/Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav className="nav-bar">
        <div className="nav-container">
          <h1 className="nav-logo">
            <i className="icon-cutlery"></i> IdealFood
          </h1>

          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/recipe">Recipes</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <button className="nav-btn">Sign Up</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = ({click}) => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>MERN Shopping Card</h2>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo_badge">0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">shop</Link>
        </li>
      </ul>
      <div className="hamburger__menu" onClick={click} >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;

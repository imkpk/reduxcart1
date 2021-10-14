/* eslint-disable no-unused-vars */
import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCarCount = () => {
    // return cartItems.reduce((qty,item)=>Number(qty)+Number(item.qty), 0)
    // my way of doing the function with basic loop
    const ele = cartItems.map((item) => +item.qty);
    let summ = 0;
    for (let i = 0; i < ele.length; i++) {
      summ += ele[i];
    }
    return summ;
  };

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
              <span className="cartlogo_badge">{getCarCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">shop</Link>
        </li>
      </ul>
      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;

/* eslint-disable vue/html-self-closing */
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = ({ show, click }) => {
  const sidebarClass = ["sidebar"];

  if (show) {
    sidebarClass.push("show");
  }

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  // console.log(cartItems);

  const getCartCount = () => {
    const cartTotal = cartItems.map((item) => +item.qty);

    //  console.log(typeof cartTotal);

    let sum = 0;
    for (let i = 0; i < cartTotal.length; i++) {
      sum += cartTotal[i];
    }
    // console.log(sum);
    return sum;
  };

  return (
    <div className={sidebarClass.join(" ")}>
      <ul className="sidebar__links" onClick={click}>
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart" />
            <span>
              Cart <span className="sidebar__cartbadge">{getCartCount()}</span>
            </span>
          </Link>{" "}
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

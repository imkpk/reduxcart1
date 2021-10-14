/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import Cartitem from "../../Cartitem/Cartitem";
import "./Cartscreen.css";
import { addToCart, removeFromCart } from "../../../redux/actions/cartActions";
const Cartscreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log("cart-screen---", cart);
  const { cartItems, loading } = cart;

  // Quantity change function
  const qtyChnangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };
  //remove item from cart
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  //get cart count
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  //getCart SubTotal
  const getCartSubTotal = () => {
    // if (!cartItems) {
    //   return "Loading...";
    // } else {
    //   return cartItems
    //     .reduce((price, item) => price + item.price * item.qty, 0)
    //     .toFixed(2);
    // }
    return cartItems
      .reduce((price, item, i, arr) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>Shopping Cart</h2>
        {cartItems === undefined ? (
          <h2>Loading...</h2>
        ) : cartItems.length === 0 ? (
          <div>
            Your Cart is Empty <Link to="/">Go Back</Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <Cartitem
              key={item.product}
              item={item}
              qtyChnangeHandler={qtyChnangeHandler}
              removeFromCartHandler={removeFromCartHandler}
            />
          ))
        )}
      </div>
      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>Subtotal ({getCartCount()}) items:</p>
          <p>${getCartSubTotal()}</p>
        </div>
        <div>
          <button>Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cartscreen;

import React from "react";
import Cartitem from "../../Cartitem/Cartitem";
import "./Cartscreen.css";

const Cartscreen = () => {
  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>Shopping Cart</h2>
        <Cartitem />
        <Cartitem />
        <Cartitem />
        <Cartitem />
        <Cartitem />
        <Cartitem />
        <Cartitem />
      </div>
      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>subtotal (0) items:</p>
          <p>$499</p>
        </div>
        <div><button>Proceed to checkout</button></div>
      </div>
    </div>
  );
};

export default Cartscreen;

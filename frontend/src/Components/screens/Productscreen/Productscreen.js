import React from 'react'
import './Productscreen.css'
const Productscreen = () => {
  return (
    <div className="productscreen">
      <div className="productscreen__left">
        <div className="left__image">
          <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="Product name" />
        </div>
        <div className="left__info">
          <p className="left__name">Product 1</p>
          <p>Price</p>
          <p>Description: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, ipsam?</p>
        </div>
      </div>
      <div className="productscreen__right">
        <div className="right__info">
          <p>Price <span>234</span></p>
          <p>Status <span>In Stock</span></p>
          <p>Quantity <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select></p>
          <p><button type="button">Add To cart</button></p>
        </div>
      </div>
    </div>

  )
}

export default Productscreen

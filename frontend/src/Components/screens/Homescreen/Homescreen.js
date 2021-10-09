import React from 'react'
import Product from '../../Product/Product'
import './Homescreen.css'
const Homescreen = () => {
  return (
    <div className="homescreen">
      <h2 className="homescreen__title"> Latest Product</h2>
      <div className="homescreen__products">
<Product/>
<Product/>
<Product/>
<Product/>
<Product/>
<Product/>
<Product/>
<Product/>
      </div>
      Home screen 
    </div>
  )
}

export default Homescreen

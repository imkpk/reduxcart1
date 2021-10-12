import React from 'react'
import Product from '../../Product/Product'
import './Homescreen.css'
import { useEffect } from 'react'
import{useDispatch,useSelector} from 'react-redux'


const Homescreen = () => {



  return (
    <div className="homescreen">
      <h2 className="homescreen__title"> Latest Product</h2>
      <div className="homescreen__products">
<Product/>

      </div>
      Home screen 
    </div>
  )
}

export default Homescreen

import * as actionTypes from '../constants/CartConstants';
import axios from 'axios'
// import { get } from 'mongoose';


// addto cart function
export const addToCart=(id,qty)=>async(dispatch,getState)=>{
  const {data}=axios.get(`/api/products/${id}`);

  dispatch({
    type:actionTypes.ADD_TO_CART,
    payload:{
      product:data._id,
      name:data.name,
      ImageUrl:data.imageUrl,
      price:data.price,
      countInStock:data.countInStock,
      qty,
    }
  })
  localStorage.setItem('cart',JSON.stringify(getState().cart.cartItems))
}

// remove from cart 
export const removeFromCart=(id)=>(dispatch,getState)=>{
  dispatch({
    type:actionTypes.REMOVE_FROM_CART,
    payload:id
  })
}


import * as actionTypes from '../constants/CartConstants';

// console.log(actionTypes);
export const cartReducer = (state={cartItems:[]},action)=>{
  console.log('reducer state--',state);
  switch (action.type) {
    case actionTypes.ADD_TO_CART:{
      const item=action.payload;
      const exitstItem=state.cartItems.find(x=>x.product===item.product);
      if(exitstItem){
        return{
          ...state,
          cartItems:state.cartItems.map((x)=>
          x.product===exitstItem.product? item:x),
        }
      }else{
        return{
          ...state, cartItems:[...state.cartItems,item],
        }
      }
    }
    case actionTypes.REMOVE_FROM_CART:{
      return{
        ...state,cartItems:state.cartItems.filter((x)=>x.product !==action.payload)
      }
    }


    default:
      return state;
  }
}
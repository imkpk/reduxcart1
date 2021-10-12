import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// REDUCERS
import { cartReducer } from "./reducers/CartReducers";
import { getProductReducer,getProductDetailsReducer } from "./reducers/productReducers";
const reducer = combineReducers({
  cart:cartReducer,
  getProducts:getProductReducer,
  getProductDetails:getProductDetailsReducer 
});

const middleware = [thunk];

// store
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

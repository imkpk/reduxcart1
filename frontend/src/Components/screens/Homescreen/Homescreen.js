/* eslint-disable no-unused-vars */
import React from "react";
import Product from "../../Product/Product";
import "./Homescreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts as listProducts,
  getProductDetails as listDetails,
} from "../../../redux/actions/productActions";

const Homescreen = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.getProducts);

  const { loading, product, error } = allProducts;

  console.log("use-dispatch---", allProducts);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="homescreen">
      <h2 className="homescreen__title"> Latest Product</h2>
      <div className="homescreen__products">
        {product === undefined  ? ( <h2>Loading....</h2>
        ) : loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>Error log: {error}</h2>
        ) : (
          product.map((product) => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Homescreen;

require("dotenv").config();
const express=require('express')
const Router=express.Router();
// const express =require('express')
const {
  getProducts,
  getProductById,
} = require("../controller/productControllers");

Router.get("/", getProducts);
Router.get("/:id", getProductById);

module.exports = Router;

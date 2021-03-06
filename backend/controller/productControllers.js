require("dotenv").config();
const Product = require("../models/Product");

// get all the products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "server Error" });
  }
};

// find product by ID
const getProductById = async (req, res) => {
  const id = await req.params.id;
  // console.log('request params id---',id);
  try {
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getProducts,
  getProductById,
};

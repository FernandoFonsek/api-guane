const express = require("express");

//controller
const {
  createProduct,
  getProducts,
} = require("../controllers/product.controller");

const router = express.Router();

router.post("/addProduct", createProduct);

router.get("/getProducts", getProducts);

module.exports = { productRouter: router };

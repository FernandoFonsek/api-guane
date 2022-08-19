const express = require("express");

//controller
const { createProduct } = require("../controllers/product.controller");

const router = express.Router();

router.post("/addProduct", createProduct);

module.exports = { productRouter: router };

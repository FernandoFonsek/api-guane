const { Product } = require("../models/product.model");

//utils
const { catchAsync } = require("../utils/catchAsync");
const { AppError } = require("../utils/appError");

exports.createProduct = catchAsync(async (req, res, next) => {
  const { name, description, category, price, quantity, userId, status } =
    req.body;

  const newProduct = await Product.create({
    name,
    description,
    category,
    price,
    quantity,
    userId,
    status,
  });

  res.status(201).json({
    response: "success",
    data: newProduct,
  });
});

exports.getProducts = catchAsync(async (req, res, next) => {
  const products = await Product.findAll();

  res.status(201).json({
    response: "success",
    data: products,
  });
});

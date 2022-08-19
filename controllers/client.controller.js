//Models
const { Client } = require("../models/client.model");

//Utils
const { catchAsync } = require("../utils/catchAsync");
const { AppError } = require("../utils/appError");

exports.createClient = catchAsync(async (req, res, next) => {
  const { name, email, phone, userId, status } = req.body;

  const newClient = await Client.create({
    name,
    email,
    phone,
    userId,
    status,
  });

  if (!newClient) {
    return next(new AppError("Can't create Client", 404));
  }

  //response
  res.status(201).json({
    status: "success",
    data: { newClient },
  });
});

//Models
const { Users } = require("../models/user.model");

//Utils
const { catchAsync } = require("../utils/catchAsync");
const { AppError } = require("../utils/appError");

exports.createUser = catchAsync(async (req, res, next) => {
  const { name, email, password, role, status } = req.body;
  const newUser = await Users.create({
    name,
    email,
    password,
    role: role || "operator",
    status: status || "available",
  });

  if (!newUser) {
    return next(new AppError("Can't create user", 404));
  }

  res.status(201).json({
    status: "success",
    data: { user: newUser },
  });
});

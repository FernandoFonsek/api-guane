//  encryption
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Models
const { Users } = require("../models/user.model");

//Utils
const { catchAsync } = require("../utils/catchAsync");
const { AppError } = require("../utils/appError");

exports.loginUser = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  //search user whit give Email
  const user = await Users.findOne({ where: { email, status: "available" } });

  //User no valid
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return next(new AppError("Credentials are not valid", 404));
  }

  //user is valid
  //Create json web token
  const token = await jwt.sign(
    //payload
    {
      id: user.id,
    },
    //secret phrase
    "secret",
    //options time expires
    {
      expiresIn: "2h",
    }
  );

  //send token to cookie
  const cookieOptions = {
    httpOnly: true,
    expires: new Date(Date.now() + 2 * 60 * 60 * 1000),
    sameSite: true,
  };
  //validation environment
  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;
  //send token
  res.cookie("jwt", token, cookieOptions);

  res.status(200).json({
    status: "success",
    data: { user, token },
  });
});

exports.createUser = catchAsync(async (req, res, next) => {
  const { name, email, password, role, status } = req.body;

  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await Users.create({
    name,
    email,
    password: hashedPassword,
    role: role || "operator",
    status: status || "available",
  });

  if (!newUser) {
    return next(new AppError("Can't create user", 404));
  }
  // newUser.password = undefined;

  res.status(201).json({
    status: "success",
    data: { user: newUser },
  });
});

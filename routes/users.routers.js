const express = require("express");

//Controllers
const { createUser } = require("../controllers/user.controller");

const router = express.Router();

router.post("/create", createUser);

module.exports = { userRouter: router };

const express = require("express");

//Controllers
const { createUser, loginUser } = require("../controllers/user.controller");

const router = express.Router();

router.post("/create", createUser);
router.post("/login", loginUser);

module.exports = { userRouter: router };

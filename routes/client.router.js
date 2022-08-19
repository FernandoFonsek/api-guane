const express = require("express");

//Controllers
const { createClient } = require("../controllers/client.controller");

const router = express.Router();

router.post("/new", createClient);

module.exports = { clientRouter: router };

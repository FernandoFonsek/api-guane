const express = require("express");
const cors = require("cors");

//Routes
const { userRouter } = require("./routes/users.routers");
const { clientRouter } = require("./routes/client.router");
const { productRouter } = require("./routes/product.router");

//Controllers
const { globalErrorHandler } = require("./controllers/error.controller");

//Init app
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("*", cors());

//endponts
app.use("/api/v1/user", userRouter);
//Clients
app.use("/api/v1/client", clientRouter);
//Products
app.use("/api/v1/product", productRouter);

app.use(globalErrorHandler);

module.exports = { app };

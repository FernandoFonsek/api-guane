//utils
const { db } = require("./utils/database");
const { initModels } = require("./utils/initModels");

//Express app
const { app } = require("./app");

//Model relations
// initModels();

db.sync()
  .then(() => {
    console.log("Database connected");
    startServer();
  })
  .catch((err) => console.log(err));

const startServer = () => {
  app.listen(4000, () => {
    console.log("Guane API running!");
  });
};

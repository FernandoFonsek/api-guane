//Models
const { Users } = require("../models/user.model");
const { Product } = require("../models/product.model");
const { Client } = require("../models/client.model");
const { BillInOrder } = require("../models/billInOrder.model");
const { Bill } = require("../models/bill.model");
const { Stocktaking } = require("../models/stocktaking.model");

//Define relations models
const userRelations = () => {
  // 1 user <-> products M
  Users.hasMany(Product);
  Product.hasOne(Users);

  // 1 user <-> client M
  Users.hasMany(Client);
  Client.hasOne(Users);

  // 1 User <-> bill In Order M
  Users.hasMany(BillInOrder);
  BillInOrder.hasOne(Users);

  // 1 user <-> bill M
  Users.hasMany(Bill);
  Bill.hasOne(Users);
};
const clientRelations = () => {
  //Client <-> BillInOrder M
  Client.hasMany(BillInOrder);
  BillInOrder.hasOne(Client);
  //Client <-> Bill M
  Client.hasMany(Bill);
  Bill.hasOne(Client);
};
const billInOrderRelations = () => {
  // billInOrder <-> products M
  BillInOrder.hasMany(Product);
  Product.hasOne(BillInOrder);

  //BillInOrder <-> Bill
  BillInOrder.hasOne(Bill);
  Bill.hasOne(BillInOrder);
};
const stocktakingRelations = () => {
  //stocktaking <-> products M
  Stocktaking.hasMany(Product);
  Product.hasOne(Stocktaking);
};
//init models
const initModels = () => {
  userRelations();
  clientRelations();
  billInOrderRelations();
  stocktakingRelations();
};

module.exports = { initModels };

const { DataTypes } = require("sequelize");

const { db } = require("../utils/database");

const BillInOrder = db.define(
  "billInOrder",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      //disabled | available | deleted"
      defaultValue: "available",
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = { BillInOrder };

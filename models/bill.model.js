const { DataTypes } = require("sequelize");

const { db } = require("../utils/database");

const Bill = db.define(
  "bill",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    billInOrderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalPrice: {
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
      allowNull: false,
      //"available | disable | deleted"
      defaultValue: "available",
    },
  },
  { timestamps: false }
);
module.exports = { Bill };

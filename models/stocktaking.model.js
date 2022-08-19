const { DataTypes } = require("sequelize");

const { db } = require("../utils/database");

const Stocktaking = db.define(
  "stocktaking",
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
  },
  { timestamps: false }
);

module.exports = { Stocktaking };

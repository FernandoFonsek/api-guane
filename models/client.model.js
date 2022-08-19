const { DataTypes } = require("sequelize");

//import the configuration of data base
const { db } = require("../utils/database");

//Define Model CLient
const Client = db.define(
  "client",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      //disabled | available | deleted"
      defaultValue: "available",
    },
  },
  { timestamps: false }
);

//Export model
module.exports = { Client };

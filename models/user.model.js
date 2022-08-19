// DataTypes permite interpretar los diferentes tipos de datos a sequelize
const { DataTypes } = require("sequelize");

// import the configuration of data base
const { db } = require("../utils/database");

//Define Todo Model
const Users = db.define(
  "users",
  {
    //Define attributes
    id: {
      //Define datatypes
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
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      //"admin" | "operator"
      defaultValue: "operator",
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

//Export model
module.exports = { Users };

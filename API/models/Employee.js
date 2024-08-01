const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const Employee = db.define("Employee", {
  name: { type: DataTypes.STRING(100), allowNull: false },
  position: { type: DataTypes.STRING(50), allowNull: false },
  admission: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  email: { type: DataTypes.STRING(50), allowNull: false },
});

module.exports = Employee;

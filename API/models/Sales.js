const { DataTypes } = require("sequelize");
const db = require("../db/conn");
const Employee = require("./Employee");

const Sales = db.define("Sales", {
  client: { type: DataTypes.STRING(100), allowNull: false },
  date: { type: DataTypes.DATE, allowNull: false },
  value: { type: DataTypes.FLOAT, allowNull: false },
  product: { type: DataTypes.STRING(100), allowNull: false },
});
Sales.belongsTo(Employee, {
  foreignKey: {
    name: "employeeId",
    allowNull: false,
  },
});

module.exports = Sales;

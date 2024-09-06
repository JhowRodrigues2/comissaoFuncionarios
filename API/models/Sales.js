const { DataTypes } = require("sequelize");
const db = require("../db/conn");
const Employee = require("./Employee");
const commission = require("../db/conn");

const Sales = db.define("Sales", {
  client: { type: DataTypes.STRING(100), allowNull: false },
  date: { type: DataTypes.DATE, allowNull: false },
  value: { type: DataTypes.FLOAT, allowNull: false },
  product: { type: DataTypes.STRING(100), allowNull: false },
  paymentMethod: { type: DataTypes.INTEGER, allowNull: false },
  commission: { type: DataTypes.FLOAT },
});
Sales.belongsTo(Employee, {
  foreignKey: {
    name: "employeeId",
    allowNull: false,
  },
});

module.exports = Sales;

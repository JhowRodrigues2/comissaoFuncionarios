const Employee = require("../models/Employee");

const findAll = async (req, res) => {
  const employees = await Employee.findAll();
  res.json(employees);
};

module.exports = { findAll };

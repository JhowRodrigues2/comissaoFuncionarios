const Sales = require("../models/Sales");
const Employee = require("../models/Employee");

const createSale = async (req, res) => {
  try {
    const {
      client,
      date,
      value,
      product,
      paymentMethod,
      commission,
      employeeId,
    } = req.body;
    console.log("Request body:", req.body);

    const employee = await Employee.findByPk(employeeId);
    console.log("Employee found:", employee);

    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }

    const sale = await Sales.create({
      client,
      date,
      value,
      product,
      paymentMethod,
      commission,
      employeeId: employee.id,
    });
    console.log("Sale created:", sale);

    res.status(201).json(sale);
  } catch (error) {
    console.error("Error creating sale:", error);
    res.status(500).json({ error: "Failed to create sale" });
  }
};

const getSales = async (req, res) => {
  try {
    const sales = await Sales.findAll();
    res.status(200).json(sales);
  } catch (error) {
    console.error("Error fetching sales:", error);
    res.status(500).json({ error: "Failed to fetch sales" });
  }
};
const getSalesByEmployee = async (req, res) => {
  const id = req.params.id;
  try {
    const employee = await Employee.findOne({ where: { id } });
    if (employee) {
      const sales = await Sales.findAll({ where: { employeeId: id } });
      res.status(200).json(sales);
    } else {
      res.status(404).json({ message: "Employee not found." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching sales.", error: error.message });
  }
};

module.exports = {
  createSale,
  getSales,
  getSalesByEmployee,
};

const Sales = require("../models/Sales");
const Employee = require("../models/Employee");
const { Op } = require("sequelize");

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
      employeeId,
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
  const { month, year } = req.query;

  try {
    const employee = await Employee.findByPk(id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found." });
    }

    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0, 23, 59, 59);

    const sales = await Sales.findAll({
      where: {
        employeeId: id,
        date: {
          [Op.between]: [startDate, endDate],
        },
      },
    });

    res.status(200).json(sales);
  } catch (error) {
    console.error("Error fetching sales:", error);
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

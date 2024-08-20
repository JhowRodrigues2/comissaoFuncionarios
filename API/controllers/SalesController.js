const Sales = require("../models/Sales");
const Employee = require("../models/Employee");

const createSale = async (req, res) => {
  try {
    const { client, date, value, product, paymentMethod, employeeId } =
      req.body;
    console.log("Request body:", req.body); // Log da requisição recebida

    const employee = await Employee.findByPk(employeeId);
    console.log("Employee found:", employee); // Log do funcionário encontrado

    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }

    const sale = await Sales.create({
      client,
      date,
      value,
      product,
      paymentMethod,
      employeeId: employee.id,
    });
    console.log("Sale created:", sale); // Log da venda criada

    res.status(201).json(sale);
  } catch (error) {
    console.error("Error creating sale:", error); // Log do erro detalhado
    res.status(500).json({ error: "Failed to create sale" });
  }
};

const getSales = async (req, res) => {
  try {
    const sales = await Sales.findAll();
    res.status(200).json(sales);
  } catch (error) {
    console.error("Error fetching sales:", error); // Log do erro detalhado
    res.status(500).json({ error: "Failed to fetch sales" });
  }
};

module.exports = {
  createSale,
  getSales,
};

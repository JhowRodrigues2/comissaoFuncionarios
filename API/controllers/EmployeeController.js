const Employee = require("../models/Employee");

const findAll = async (req, res) => {
  const employees = await Employee.findAll();
  res.json(employees);
};

const getById = async (req, res) => {
  const id = req.params.id;
  try {
    const employee = await Employee.findOne({ where: { id: id } });
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar usuários." });
  }
};

const createEmployee = async (req, res) => {
  const { name, position, admission, email } = req.body;
  try {
    await Employee.create({
      name,
      position,
      admission,
      email,
    });
    res.status(201).json({ message: "Usuário adicionado com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao adicionar usuário." });
  }
};
module.exports = { findAll, getById, createEmployee };

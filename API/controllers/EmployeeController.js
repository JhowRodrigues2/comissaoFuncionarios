const Employee = require("../models/Employee");

const findAll = async (req, res) => {
  try {
    const employees = await Employee.findAll({
      raw: true,
      attributes: ["id", "name", "position", "email"],
    });
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar usuários." });
  }
};

const getById = async (req, res) => {
  const id = req.params.id;
  try {
    const employee = await Employee.findOne({ where: { id: id } });
    if (employee) {
      res.status(200).json(employee);
    } else {
      res.status(404).json({ message: "Funcionário não encontrado." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao buscar usuário.", error: error.message });
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
    res.status(201).json({ message: "Funcionário adicionado com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao adicionar Funcionário." });
  }
};

const removeEmployee = async (req, res) => {
  const id = req.params.id;
  try {
    const removeEmployee = await Employee.destroy({
      where: { id: id },
    });
    if (removeEmployee) {
      res.status(200).json({ message: "Funcionário removido com sucesso!" });
    } else {
      res.status(404).json({ message: "Funcionário não encontrado." });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar Funcionário." });
  }
};

const updateEmployee = async (req, res) => {
  const { id, name, position, admission, email } = req.body;

  const employeeData = {
    name,
    position,
    admission,
    email,
  };

  try {
    const updatedEmployee = await Employee.update(employeeData, {
      where: { id: id },
    });
    if (updatedEmployee) {
      res.status(200).json({ message: "Dados alterados com sucesso!" });
    } else {
      res.status(404).json({ message: "ID não encontrado." });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao alterar dados." });
  }
};

module.exports = {
  findAll,
  getById,
  createEmployee,
  removeEmployee,
  updateEmployee,
};

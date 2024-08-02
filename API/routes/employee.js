const express = require("express");
const {
  getById,
  createEmployee,
} = require("../controllers/EmployeeController");
const router = express.Router();

router.get("/employee/:id", getById);
router.post("/employee/create", createEmployee);

module.exports = router; // Corrigido para exportar apenas o roteador

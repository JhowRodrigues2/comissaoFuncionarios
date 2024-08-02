const express = require("express");
const {
  getById,
  createEmployee,
  removeEmployee,
  findAll,
  updateEmployee,
} = require("../controllers/EmployeeController");
const router = express.Router();

router.get("/employee/", findAll);
router.get("/employee/:id", getById);
router.post("/employee/create", createEmployee);
router.delete("/employee/remove/:id", removeEmployee);
router.put("/employee/edit/:id", updateEmployee);
module.exports = router;

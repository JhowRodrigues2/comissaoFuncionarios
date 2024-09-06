const express = require("express");
const router = express.Router();

const {
  createSale,
  getSalesByEmployee,
} = require("../controllers/SalesController");
router.post("/sales", createSale);
router.get("/sales/:id", getSalesByEmployee);
module.exports = router;

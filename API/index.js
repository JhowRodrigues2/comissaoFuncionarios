const conn = require("./db/conn");
const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/routes");

app.use(cors());
app.use(express.json());
app.use(routes);

const Employee = require("./models/Employee");
const employeeRoutes = require("./routes/employee");
const salesRoutes = require("./routes/Sales");

app.use("/", employeeRoutes, salesRoutes);
conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));

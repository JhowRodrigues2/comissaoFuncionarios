import { Box, Button, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { Textfield } from "../components/Textfield";
import DateComponent from "../components/DatePicker";
import { EmployeeContext } from "../context/EmployeeContext";
import { showSuccessAlert } from "../components/SucessAlert";

const Employee = () => {
  const { addEmployee } = useContext(EmployeeContext);
  const [name, setName] = useState();
  const [position, setPosition] = useState();
  const [dateAdmission, setDateAdmission] = useState();
  const [email, setEmail] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const employeeData = {
      name,
      position,
      admission: dateAdmission,
      email,
    };
    addEmployee(employeeData);
    showSuccessAlert(
      `Funcionário ${employeeData.name} cadastrado com sucesso! `
    );

    setName("");
    setPosition("");
    setDateAdmission("");
    setEmail("");
  };

  return (
    <Box className="boxArea">
      <Typography variant="h6">Adicione um Funcionário</Typography>
      <form className="form" onSubmit={handleSubmit}>
        <Textfield
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Nome"
        />
        <Textfield
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          label="Função"
        />
        <Box className="date">
          <Typography>Data de Admissão</Typography>
          <DateComponent
            value={dateAdmission}
            onChange={(date) => setDateAdmission(date)}
          />
        </Box>
        <Textfield
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="E-mail"
          type="email"
        />
        <Button type="submit" variant="outlined">
          Cadastrar
        </Button>
      </form>
    </Box>
  );
};

export default Employee;

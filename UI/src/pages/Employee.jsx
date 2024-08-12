import { Box, Button, Typography } from "@mui/material";
import React from "react";

import { Textfield } from "../components/Textfield";
import Date from "../components/DatePicker";

const Employee = () => {
  return (
    <Box className="employee">
      <Typography variant="h6">Adicione um Funcionário</Typography>
      <form className="form">
        <Textfield value={"Nome"} />
        <Textfield value={"Função"} />
        <Typography className="date">
          Data de Admissão <Date />
        </Typography>
        <Textfield value={"E-mail"} type="email" />
        <Button type="submit"> Cadastrar</Button>
      </form>
    </Box>
  );
};

export default Employee;

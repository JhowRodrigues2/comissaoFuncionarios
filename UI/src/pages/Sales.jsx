import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { Textfield } from "../components/Textfield";
import DateComponent from "../components/DatePicker";
import { CurrencyField } from "../components/CurrencyField";
import { SelectList } from "../components/SelectList";
import { PaymentMethod } from "../components/PaymentMethod";
export const Sales = () => {
  return (
    <Box className="boxArea">
      <Typography variant="h6">Cadastrar Vendas</Typography>
      <form className="form">
        <Textfield label="Cliente" />
        <Box className="date">
          <Typography>Data da Venda</Typography>
          <DateComponent />
        </Box>
        <CurrencyField required />
        <Textfield label="Produto" />
        <SelectList />
        <PaymentMethod />
        <Button type="submit" variant="outlined">
          Cadastrar
        </Button>
      </form>
    </Box>
  );
};

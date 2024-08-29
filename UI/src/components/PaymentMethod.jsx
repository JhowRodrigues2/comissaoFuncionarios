import React, { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

export const PaymentMethod = ({ value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <FormControl fullWidth required>
      <InputLabel id="name-select-label">Método de Pagamento</InputLabel>
      <Select
        labelId="name-select-label"
        id="name-select"
        value={value}
        onChange={handleChange}
        label="Método de Pagamento"
      >
        <MenuItem value={1}>Dinheiro</MenuItem>
        <MenuItem value={2}>Pix</MenuItem>
        <MenuItem value={3}>Cartão de Débito</MenuItem>
        <MenuItem value={4}>Cartão de Crédito</MenuItem>
      </Select>
    </FormControl>
  );
};

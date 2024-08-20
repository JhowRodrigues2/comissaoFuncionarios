import React, { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

export const PaymentMethod = () => {
  return (
    <FormControl fullWidth required>
      <InputLabel id="name-select-label">Método de Pagamento</InputLabel>
      <Select
        labelId="name-select-label"
        id="name-select"
        label="Método de Pagamento"
      >
        <MenuItem id="1" value="Dinheiro">
          Dinheiro
        </MenuItem>
        <MenuItem id="2" value="Pix">
          Pix
        </MenuItem>
        <MenuItem id="3" value="Débito">
          Cartão de Débito
        </MenuItem>
        <MenuItem id="4" value="Crédito">
          Cartão de Crédito
        </MenuItem>
      </Select>
    </FormControl>
  );
};

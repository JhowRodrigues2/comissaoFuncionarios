import React from "react";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";

export const CurrencyField = ({ value, onChange }) => {
  const handleChange = (event, newValue) => {
    onChange(newValue);
  };

  return (
    <CurrencyTextField
      variant="outlined"
      label="Valor da Venda"
      currencySymbol="R$"
      decimalCharacter=","
      digitGroupSeparator="."
      outputFormat="number"
      required
      value={value}
      onChange={handleChange}
    />
  );
};

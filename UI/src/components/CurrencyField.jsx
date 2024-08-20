import React from "react";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";

export const CurrencyField = () => {
  return (
    <CurrencyTextField
      variant="outlined"
      label="Valor da Venda"
      currencySymbol="R$"
      decimalCharacter=","
      digitGroupSeparator="."
      outputFormat="string"
    />
  );
};

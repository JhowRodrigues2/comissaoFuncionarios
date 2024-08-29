import { Box, Typography, Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { Textfield } from "../components/Textfield";
import DateComponent from "../components/DatePicker";
import { CurrencyField } from "../components/CurrencyField";
import { SelectList } from "../components/SelectList";
import { PaymentMethod as Payment } from "../components/PaymentMethod";
import { EmployeeContext } from "../context/EmployeeContext";
import { showSuccessAlert } from "../components/SucessAlert";
import { ErrorAlert } from "../components/ErrorAlert";

export const Sales = () => {
  const { addSale } = useContext(EmployeeContext);
  const [client, setClient] = useState("");
  const [dateSale, setDateSale] = useState("");
  const [value, setValueSale] = useState("");
  const [product, setProduct] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [paymentMethod, setPayment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const saleData = {
      client,
      date: dateSale,
      value,
      product,
      employeeId,
      paymentMethod,
    };

    try {
      await addSale(saleData);
      showSuccessAlert("Venda cadastrada com sucesso!");
      setClient("");
      setDateSale("");
      setValueSale("");
      setProduct("");
      setEmployeeId("");
      setPayment("");
    } catch (error) {
      ErrorAlert("Erro ao adicionar venda, tente novamente");
    }
  };
  return (
    <Box className="boxArea">
      <Typography variant="h6">Cadastrar Vendas</Typography>
      <form className="form" onSubmit={handleSubmit}>
        <Textfield
          label="Cliente"
          onChange={(e) => setClient(e.target.value)}
          value={client}
        />
        <Box className="date">
          <Typography>Data da Venda</Typography>
          <DateComponent
            value={dateSale}
            onChange={(date) => setDateSale(date)}
          />
        </Box>
        <CurrencyField
          required
          value={value}
          onChange={(newValue) => setValueSale(newValue)}
        />
        <Textfield
          label="Produto"
          onChange={(e) => setProduct(e.target.value)}
          value={product}
        />
        <SelectList value={employeeId} onChange={(id) => setEmployeeId(id)} />
        <Payment
          value={paymentMethod}
          onChange={(newValue) => setPayment(newValue)}
        />
        <Button type="submit" variant="outlined">
          Cadastrar
        </Button>
      </form>
    </Box>
  );
};

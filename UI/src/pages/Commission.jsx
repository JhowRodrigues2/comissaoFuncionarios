import React, { useState, useEffect, useContext } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Button,
} from "@mui/material";

import dayjs from "dayjs";
import DateComponent from "../components/DatePicker";
import { SelectList } from "../components/SelectList";
import { EmployeeContext } from "../context/EmployeeContext";

export const Commission = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [employeeId, setEmployeeId] = useState("");

  const {
    getEmployeeById,
    employeeSelected,
    getSaleById,
    saleEmployeeSelected,
    formatCurrency,
    paymentMethods,
  } = useContext(EmployeeContext);

  useEffect(() => {}, [selectedDate]);

  const filterEmployee = () => {
    getEmployeeById(employeeId);
    getSaleById(employeeId);
  };

  return (
    <Container className="boxArea">
      <Typography variant="h4">
        Listagem de Vendas Comissões e Funcionários
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <DateComponent
            label="Filtrar por Data"
            value={selectedDate}
            onChange={(newDate) => setSelectedDate(newDate)}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SelectList value={employeeId} onChange={setEmployeeId} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="outlined" fullWidth onClick={filterEmployee}>
            Aplicar Filtros
          </Button>
        </Grid>
      </Grid>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          Funcionários
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Posição</TableCell>
              <TableCell>E-mail</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employeeSelected && (
              <TableRow key={employeeSelected.id}>
                <TableCell>{employeeSelected.name}</TableCell>
                <TableCell>{employeeSelected.position}</TableCell>
                <TableCell>{employeeSelected.email}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Box>
      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          Vendas
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Data</TableCell>
              <TableCell>Forma de Pagamento</TableCell>
              <TableCell>Valor</TableCell>
              <TableCell>Comissão</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {saleEmployeeSelected.map((sale) => (
              <TableRow key={sale.id}>
                <TableCell>{dayjs(sale.date).format("DD/MM/YYYY")}</TableCell>
                <TableCell>{paymentMethods[sale.paymentMethod]}</TableCell>
                <TableCell>{formatCurrency(sale.value)}</TableCell>
                <TableCell>{formatCurrency(sale.commission)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Container>
  );
};

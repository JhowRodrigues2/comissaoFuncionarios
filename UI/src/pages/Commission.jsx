import React, { useState, useContext, useRef } from "react";
import {
  Container,
  Grid,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Button,
} from "@mui/material";
import dayjs from "dayjs";
import { SelectList } from "../components/SelectList";
import { EmployeeContext } from "../context/EmployeeContext";
import { useReactToPrint } from "react-to-print";
import DataPicketMonth from "../components/DataPicketMonth";

export const Commission = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [dateFilter, setDateFilter] = useState({
    month: dayjs().month() + 1,
    year: dayjs().year(),
  });

  const {
    getEmployeeById,
    employeeSelected,
    getSaleById,
    saleEmployeeSelected,
    formatCurrency,
    paymentMethods,
  } = useContext(EmployeeContext);

  const filterEmployee = () => {
    getEmployeeById(employeeId);
    getSaleById(employeeId, dateFilter.month, dateFilter.year);
  };

  const contentDocument = useRef();

  const handlePrint = useReactToPrint({
    content: () => contentDocument.current,
  });

  return (
    <Container className="boxArea">
      <Typography variant="h4">
        Listagem de Vendas Comissões e Funcionários
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <DataPicketMonth
            value={dayjs()
              .month(dateFilter.month - 1)
              .year(dateFilter.year)}
            onChange={(date) => setDateFilter(date)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SelectList value={employeeId} onChange={setEmployeeId} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button
            variant="outlined"
            fullWidth
            onClick={filterEmployee}
            disabled={employeeId === ""}
          >
            Aplicar Filtros
          </Button>
        </Grid>
      </Grid>
      <Box ref={contentDocument}>
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
      </Box>
      <Button
        onClick={handlePrint}
        disabled={saleEmployeeSelected.length === 0}
      >
        Imprimir
      </Button>
    </Container>
  );
};

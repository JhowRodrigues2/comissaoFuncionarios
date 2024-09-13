import * as React from "react";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
dayjs.locale("pt-br");

const DataPicketMonth = ({ value, onChange }) => {
  const [selectedMonth, setSelectedMonth] = useState(value || dayjs());

  useEffect(() => {
    setSelectedMonth(value);
  }, [value]);

  const handleChange = (novoMes) => {
    if (novoMes) {
      setSelectedMonth(novoMes);
      if (onChange) {
        onChange({
          month: novoMes.month() + 1,
          year: novoMes.year(),
        });
      }
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Selecione o mês"
        views={["year", "month"]}
        value={selectedMonth}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default DataPicketMonth;

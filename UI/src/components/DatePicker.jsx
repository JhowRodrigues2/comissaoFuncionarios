import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import "dayjs/locale/pt-br"; // Importa o locale pt-br

const DateComponent = ({ value, onChange }) => {
  // Configura o dayjs para usar o locale pt-br
  dayjs.locale("pt-br");

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      <DatePicker
        value={value ? dayjs(value) : null}
        slotProps={{
          textField: {
            required: true,
          },
        }}
        onChange={(newValue) =>
          onChange(newValue ? newValue.format("YYYY-MM-DD") : "")
        }
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default DateComponent;

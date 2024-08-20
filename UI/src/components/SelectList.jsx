import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

export const SelectList = () => {
  const { employee, findAllEmployee } = useContext(EmployeeContext);
  useEffect(() => {
    findAllEmployee();
  }, []);
  return (
    <FormControl fullWidth required>
      <InputLabel id="name-select-label">Vendedor</InputLabel>
      <Select labelId="name-select-label" id="name-select" label="Vendedor">
        {employee &&
          employee.map(({ name, id }) => (
            <MenuItem key={id} value={name}>
              {name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

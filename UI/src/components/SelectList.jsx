import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

export const SelectList = ({ value, onChange }) => {
  const { employee, findAllEmployee } = useContext(EmployeeContext);

  useEffect(() => {
    findAllEmployee();
  }, []);

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <FormControl fullWidth required>
      <InputLabel id="name-select-label">Vendedor</InputLabel>
      <Select
        labelId="name-select-label"
        id="name-select"
        label="Vendedor"
        value={value}
        onChange={handleChange}
      >
        {employee &&
          employee.map(({ name, id }) => (
            <MenuItem key={id} value={id}>
              {name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

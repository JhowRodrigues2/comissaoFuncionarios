import React from "react";
import TextField from "@mui/material/TextField";

export const Textfield = ({ value, ...props }) => {
  return <TextField label={value} fullWidth required {...props} />;
};

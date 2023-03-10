import React, { ChangeEventHandler } from "react";
import { MenuItem, TextField } from "@mui/material";

export type SelectChangeEvent = ChangeEventHandler<HTMLInputElement>;

type Props = {
  id: string;
  name: string;
  value: string | number;
  onChange: SelectChangeEvent;
  options: { id: number | string; name: string }[];
  label?: string;
  margin?: "dense" | "normal" | "none";
  fullWidth?: boolean;
  variant?: "outlined" | "standard" | "filled";
  defaultValue?: string | number;
};

export const Select = ({
  id,
  name,
  value,
  onChange,
  options,
  label,
  margin = "dense",
  fullWidth = true,
  variant = "outlined",
}: Props): JSX.Element => {
  return (
    <TextField
      id={id}
      name={name}
      variant={variant}
      value={value}
      onChange={onChange}
      fullWidth={fullWidth}
      label={label}
      margin={margin}
      select
    >
      {options.map(({ name, id }) => (
        <MenuItem key={id} value={id}>
          {name}
        </MenuItem>
      ))}
    </TextField>
  );
};

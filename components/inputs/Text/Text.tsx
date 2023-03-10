import React, { ChangeEventHandler } from "react";
import { TextField } from "@mui/material";

export type TextChangeEvent = ChangeEventHandler<HTMLInputElement>;

type Props = {
  id: string;
  name: string;
  value: string;
  onChange: TextChangeEvent;
  label?: string;
  margin?: "dense" | "normal" | "none";
  fullWidth?: boolean;
  variant?: "outlined" | "standard" | "filled";
};

export const Text = ({
  id,
  name,
  value,
  onChange,
  label,
  margin = "dense",
  fullWidth = true,
  variant = "outlined",
}: Props) => {
  return (
    <TextField
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      label={label}
      margin={margin}
      fullWidth={fullWidth}
      variant={variant}
    />
  );
};

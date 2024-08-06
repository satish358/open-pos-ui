import { TextField } from "@mui/material";
import classNames from "classnames";
import { FieldInputProps, useField } from "formik";
import React, { HTMLInputTypeAttribute } from "react";

export type InputProps = {
  label?: string;
  name: string;
  id: string;
  required?: boolean;
  type?: HTMLInputTypeAttribute;
  className?: string;
  size?: "small" | "medium";
};
const Input = (props: InputProps) => {
  const [field, meta] = useField(props.name);

  return (
    <>
      <div className={classNames(props.className, "w-100 mt-4 p-2")}>
        <TextField
          fullWidth
          {...field}
          label={props.label}
          size={props.size ? props.size : "medium"}
          name={props.name}
          required={props.required}
          type={props.type ? props.type : "text"}
          id={props.id}
          variant="outlined"
          error={meta.touched && !!meta.error}
          helperText={meta.error}
        />
      </div>
    </>
  );
};

export default Input;

import React from "react";

import { TypographyVariantTypes } from "../../../primitives/TypographyTypes";
import Typography from "../Typography/Typography";
import s from "./Input.module.scss";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  type?: string;
  customStyle?: React.CSSProperties;
  hasError?: boolean;
  errorMessage?: string;
}

const Input = (props: InputProps) => {
  const {
    value,
    disabled,
    placeholder,
    maxLength,
    customStyle,
    onChange,
    type,
    hasError,
    errorMessage,
    ...propsToFwd
  } = props;

  return (
    <div className={s.root}>
      <input
        className={s.input}
        onChange={onChange}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        maxLength={maxLength}
        style={customStyle}
        {...propsToFwd}
      />

      <div className={s.errorMessage}>
        {hasError && errorMessage && (
          <Typography
            label={errorMessage}
            customStyle={{ color: "red" }}
            variant={TypographyVariantTypes.Small}
          />
        )}
      </div>
    </div>
  );
};

export default Input;

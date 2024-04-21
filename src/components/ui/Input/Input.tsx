import React from "react";

import s from "./Input.module.scss";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  type?: string;
  customStyle?: React.CSSProperties;
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
    </div>
  );
};

export default Input;

import classNames from "classnames";
import React from "react";
import {
  ButtonSizesType,
  ButtonVariantsType,
} from "../../../primitives/ButtonTypes";

import s from "./Button.module.scss";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: ButtonVariantsType;
  size?: ButtonSizesType;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  isDisabled?: boolean;
  customStyle?: React.CSSProperties;
}

const Button = (props: ButtonProps) => {
  let {
    label,
    variant = ButtonVariantsType.Primary,
    size = ButtonSizesType.Big,
    leftIcon,
    rightIcon,
    isLoading,
    isDisabled,
    onClick,
    customStyle = {},
    ...propsToFwd
  } = props;
  return (
    <div className={s.root}>
      <button
        {...propsToFwd}
        disabled={isDisabled}
        className={classNames(s.btn, s[variant], s[size])}
        style={customStyle}
      >
        {isLoading ? (
          <div>Loading</div>
        ) : (
          <div className={s.button}>
            {leftIcon && <div className={s.leftIcon}>{leftIcon}</div>}
            {label && <div className={s.label}>{label}</div>}
            {rightIcon && <div className={s.rightIcon}>{rightIcon}</div>}
          </div>
        )}
      </button>
    </div>
  );
};

export default Button;

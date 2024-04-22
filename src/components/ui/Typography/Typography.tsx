import React from "react";
import { TypographyVariantTypes } from "../../../primitives/TypographyTypes";

import classNames from "classnames";
import s from "./Typography.module.scss";

type TypographyProps = {
  variant?: TypographyVariantTypes;
  customStyle?: React.CSSProperties;
  label: string;
  onClick?: (...args: any) => void;
};

const Typography = ({
  variant = TypographyVariantTypes.Medium,
  customStyle,
  label,
  onClick,
}: TypographyProps) => {
  const classValue = classNames(s[variant], s.typography);
  return (
    <div className={s.root} onClick={onClick}>
      {
        {
          [TypographyVariantTypes.H1]: (
            <h1 className={classValue} style={customStyle}>
              {label}
            </h1>
          ),
          [TypographyVariantTypes.H2]: (
            <h2 className={classValue} style={customStyle}>
              {label}
            </h2>
          ),
          [TypographyVariantTypes.H3]: (
            <h3 className={classValue} style={customStyle}>
              {label}
            </h3>
          ),
          [TypographyVariantTypes.Big]: (
            <div className={classValue} style={customStyle}>
              {label}
            </div>
          ),
          [TypographyVariantTypes.Medium]: (
            <div className={classValue} style={customStyle}>
              {label}
            </div>
          ),
          [TypographyVariantTypes.Small]: (
            <div className={classValue} style={customStyle}>
              {label}
            </div>
          ),
        }[variant]
      }
    </div>
  );
};

export default Typography;

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
    <>
      {
        {
          [TypographyVariantTypes.H1]: (
            <h1 className={classValue} style={customStyle} onClick={onClick}>
              {label}
            </h1>
          ),
          [TypographyVariantTypes.H2]: (
            <h2 className={classValue} style={customStyle} onClick={onClick}>
              {label}
            </h2>
          ),
          [TypographyVariantTypes.H3]: (
            <h3 className={classValue} style={customStyle} onClick={onClick}>
              {label}
            </h3>
          ),
          [TypographyVariantTypes.Big]: (
            <div className={classValue} style={customStyle} onClick={onClick}>
              {label}
            </div>
          ),
          [TypographyVariantTypes.Medium]: (
            <div className={classValue} style={customStyle} onClick={onClick}>
              {label}
            </div>
          ),
          [TypographyVariantTypes.Small]: (
            <div className={classValue} style={customStyle} onClick={onClick}>
              {label}
            </div>
          ),
          [TypographyVariantTypes.Span]: (
            <span className={classValue} style={customStyle} onClick={onClick}>
              {label}
            </span>
          ),
        }[variant]
      }
    </>
  );
};

export default Typography;

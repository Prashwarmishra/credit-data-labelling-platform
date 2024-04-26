import { faFlag as faFlagRegular } from "@fortawesome/free-regular-svg-icons";
import { faFlag, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dayjs from "dayjs";
import { Tooltip } from "react-tooltip";

import { TypographyVariantTypes } from "../../../../primitives/TypographyTypes";
import Typography from "../../../ui/Typography/Typography";
import s from "./Cell.module.scss";

type CellProps = {
  cellKey: string;
  cellData: any;
  onCellDataChange?: (cellData: any) => void;
  onRedirectionClick?: () => void;
};

const Cell = ({
  cellKey,
  cellData,
  onCellDataChange,
  onRedirectionClick,
}: CellProps) => {
  const handleClick = () => {};

  const handleCellClick = () => {
    if (onCellDataChange) {
      onCellDataChange(!cellData);
    }
  };

  const renderText = (label: any = "-") => {
    return (
      <Typography label={label.toString()} customStyle={{ minWidth: 200 }} />
    );
  };

  const getArrayToolTipData = (value: string[]) => {
    let out = "";
    value.forEach((item: string) => (out += `${item.toString()}, `));
    return out.substring(0, out.length - 2);
  };

  const renderArray = (value: string[]) => {
    let out = value[0]?.toString();
    return (
      <div
        data-tooltip-id="my-tooltip"
        data-tooltip-content={getArrayToolTipData(value)}
      >
        <Typography label={out} variant={TypographyVariantTypes.Span} />
        {value.length > 1 && (
          <Typography
            label={` + ${+value.length - 1}`}
            variant={TypographyVariantTypes.Span}
            customStyle={{ color: "blue" }}
          />
        )}
        <Tooltip id="my-tooltip" />
      </div>
    );
  };

  const renderCellData = () => {
    const value = cellData;
    if (!value) {
      return renderText(value);
    }
    if (typeof value === "object") {
      if (Array.isArray(value) && value.length) {
        return value.length > 1
          ? renderArray(cellData)
          : renderText(value[0].toString());
      } else if (cellKey === "recentEditor") {
        return renderText(value.fullName);
      }
      return renderText("-");
    } else if (cellKey === "updatedOn") {
      return renderText(dayjs(value).format("DD, MMM, YYYY"));
    } else {
      return renderText(value);
    }
  };

  const identifyCellDataTypeAndRender = () => {
    if (cellKey === "isFlagged") {
      return (
        <FontAwesomeIcon
          icon={cellData === true ? faFlag : faFlagRegular}
          color={cellData === true ? "red" : "lightGrey"}
          onClick={handleCellClick}
        />
      );
    } else if (cellKey === "redirection") {
      return (
        <FontAwesomeIcon
          icon={faLocationArrow}
          color="lightGrey"
          onClick={(e) => onRedirectionClick && onRedirectionClick()}
          style={{ cursor: "pointer" }}
        />
      );
    }
    return renderCellData();
  };

  return (
    <td className={s.root} onClick={handleClick}>
      {identifyCellDataTypeAndRender()}
    </td>
  );
};

export default Cell;

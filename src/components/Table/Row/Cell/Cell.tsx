import { faFlag as faFlagRegular } from "@fortawesome/free-regular-svg-icons";
import { faFlag, faLocationArrow } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

  const renderCellData = (value: any) => {
    if (Array.isArray(value) && value.length) {
      let out = value[0]?.toString();
      if (value.length > 1) {
        out += ` +${value.length - 1}`;
      }
      return out;
    }
    return value?.toString();
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
    return (
      <Typography
        label={renderCellData(cellData)}
        customStyle={{ minWidth: 200 }}
      />
    );
  };

  return (
    <td
      className={s.root}
      //   style={{ background: "white", height: 200, width: 200 }}
      onClick={handleClick}
    >
      {identifyCellDataTypeAndRender()}
    </td>
  );
};

export default Cell;

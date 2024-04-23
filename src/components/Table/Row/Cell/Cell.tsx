import { faFlag as faFlagRegular } from "@fortawesome/free-regular-svg-icons";
import { faFlag } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typography from "../../../ui/Typography/Typography";
import s from "./Cell.module.scss";

type CellProps = {
  cellKey: string;
  cellData: any;
  onCellDataChange?: (cellData: any) => void;
};

const Cell = ({ cellKey, cellData, onCellDataChange }: CellProps) => {
  const handleClick = () => {};

  const renderCellData = (value: any) => {
    if (Array.isArray(value) && value.length) {
      let out = value[0].toString();
      if (value.length > 1) {
        out += ` +${value.length - 1}`;
      }
      return out;
    }
    return value.toString();
  };

  return (
    <td
      className={s.root}
      //   style={{ background: "white", height: 200, width: 200 }}
      onClick={handleClick}
    >
      {cellKey === "isFlagged" ? (
        <FontAwesomeIcon
          icon={cellData === true ? faFlag : faFlagRegular}
          color={cellData === true ? "red" : "lightGrey"}
          onClick={() => onCellDataChange && onCellDataChange(!cellData)}
        />
      ) : (
        <Typography label={renderCellData(cellData)} />
      )}
    </td>
  );
};

export default Cell;

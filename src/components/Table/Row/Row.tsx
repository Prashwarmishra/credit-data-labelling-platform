import { HeaderType } from "../Header/Header";
import Cell from "./Cell/Cell";
import s from "./Row.module.scss";

export interface RowType {
  [key: string]: any;
}

type RowProps = {
  headers: HeaderType;
  rowData: RowType;
  setModalData: (data: RowType) => void;
  isEditable?: boolean;
  onRowDataChange: (data: RowType) => void;
  onRedirectionClick?: (data: RowType) => void;
};

const Row = ({
  headers,
  rowData,
  setModalData,
  isEditable,
  onRowDataChange,
  onRedirectionClick,
}: RowProps) => {
  const isFlagged = rowData["isFlagged"];

  const handleCellDataChange = (key: string, data: any) => {
    onRowDataChange({ ...rowData, [key]: data });
  };

  return (
    <tr
      className={s.root}
      style={isFlagged ? { backgroundColor: "rgba(250, 190, 190, 0.2)" } : {}}
    >
      {Object.keys(headers).map(function (cell, i) {
        return (
          <Cell
            key={i}
            cellKey={cell}
            cellData={rowData[cell]}
            onCellDataChange={(newCellData) =>
              handleCellDataChange(cell, newCellData)
            }
            onRedirectionClick={() =>
              onRedirectionClick && onRedirectionClick(rowData)
            }
          />
        );
      })}
    </tr>
  );
};

export default Row;

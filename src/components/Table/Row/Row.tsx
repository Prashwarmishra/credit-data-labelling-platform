import { HeaderType } from "../Header/Header";
import { ViewOnlyModalDetails } from "../ViewOnlyModal/ViewOnlyModal";
import Cell from "./Cell/Cell";
import s from "./Row.module.scss";

export interface RowType {
  [key: string]: any;
}

type RowProps = {
  headers: HeaderType;
  rowData: RowType;
  setModalData: () => void;
  isEditable?: boolean;
  onRowDataChange: (data: RowType) => void;
  onRedirectionClick?: (data: RowType) => void;
  setViewOnlyModalDetails?: (details: ViewOnlyModalDetails) => void;
};

const Row = ({
  headers,
  rowData,
  setModalData,
  isEditable,
  onRowDataChange,
  onRedirectionClick,
  setViewOnlyModalDetails,
}: RowProps) => {
  const isFlagged = rowData["isFlagged"];

  const handleCellDataChange = (key: string, data: any) => {
    onRowDataChange({ ...rowData, [key]: data });
  };

  const handleCellClick = (cellKey: string, cellData: any) => {
    if (cellKey === "isFlagged") {
      handleCellDataChange(cellKey, !cellData);
    } else if (
      cellKey === "redirection" &&
      typeof onRedirectionClick === "function"
    ) {
      onRedirectionClick(rowData);
    } else if (cellKey === "isEditable") {
      setModalData();
    } else if (
      cellKey === "previousChanges" &&
      cellData?.length &&
      setViewOnlyModalDetails
    ) {
      setViewOnlyModalDetails({
        title: headers[cellKey],
        headers,
        data: cellData,
      });
    }
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
            onCellClick={() => handleCellClick(cell, rowData[cell])}
          />
        );
      })}
    </tr>
  );
};

export default Row;

import { useState } from "react";
import Header, { HeaderType } from "./Header/Header";
import Row, { RowType } from "./Row/Row";

import s from "./Table.module.scss";

export type TableProps = {
  headers: HeaderType;
  data: RowType[];
  setData: (data: RowType[]) => void;
};

const Table = ({ headers, data, setData }: TableProps) => {
  // state
  const [modalData, setModalData] = useState<RowType>();

  const handleRowDataChange = (rowData: RowType, index: number) => {
    const newData = [...data];
    newData[index] = rowData;
    setData(newData);
  };

  return (
    <table className={s.root}>
      <tr className={s.headers}>
        {Object.keys(headers).map((row, index) => (
          <Header headerData={headers[row]} key={index} />
        ))}
      </tr>

      {data.map((row, index) => (
        <Row
          key={index}
          headers={headers}
          rowData={row}
          setModalData={setModalData}
          onRowDataChange={(rowData: RowType) =>
            handleRowDataChange(rowData, index)
          }
        />
      ))}
    </table>
  );
};

export default Table;

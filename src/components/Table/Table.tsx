import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header, { HeaderType } from "./Header/Header";
import Row, { RowType } from "./Row/Row";

import s from "./Table.module.scss";

export type TableProps = {
  headers: HeaderType;
  data: RowType[];
  setData: (data: RowType[]) => void;
  rowClickRedirectionUrl?: string;
};

const Table = ({
  headers,
  data,
  setData,
  rowClickRedirectionUrl,
}: TableProps) => {
  // state
  const [modalData, setModalData] = useState<RowType>();

  // custom hooks
  const navigate = useNavigate();

  if (rowClickRedirectionUrl) {
    headers = { ...headers, redirection: "" };
  }

  const handleRowDataChange = (rowData: RowType, index: number) => {
    const newData = [...data];
    newData[index] = rowData;
    setData(newData);
  };

  const onRedirectionClick = (rowData: RowType) => {
    if (rowClickRedirectionUrl) {
      navigate(`${rowClickRedirectionUrl}/${rowData.id}`);
    }
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
          onRedirectionClick={(rowData: RowType) => onRedirectionClick(rowData)}
        />
      ))}
    </table>
  );
};

export default Table;

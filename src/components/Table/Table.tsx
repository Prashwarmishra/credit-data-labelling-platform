import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header, { HeaderType } from "./Header/Header";
import Row, { RowType } from "./Row/Row";

import {
  ButtonSizesType,
  ButtonVariantsType,
} from "../../primitives/ButtonTypes";
import { TypographyVariantTypes } from "../../primitives/TypographyTypes";
import Button from "../ui/Button/Button";
import Typography from "../ui/Typography/Typography";
import s from "./Table.module.scss";

export type TableProps = {
  headers: HeaderType;
  data: RowType[];
  setData: (data: RowType[]) => void;
  currentPage: number;
  totalPages: number;
  rowClickRedirectionUrl?: string;
};

const Table = ({
  headers,
  data,
  setData,
  currentPage,
  totalPages,
  rowClickRedirectionUrl,
}: TableProps) => {
  // state
  const [modalData, setModalData] = useState<RowType>();

  // custom hooks
  const navigate = useNavigate();
  const { search, pathname } = useLocation();

  const searchParams = useMemo(() => new URLSearchParams(search), [search]);

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

  const handlePageChange = (pageNumber: number) => {
    searchParams.set("page", pageNumber.toString());
    navigate({
      pathname,
      search: searchParams.toString(),
    });
  };

  return (
    <>
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
            onRedirectionClick={(rowData: RowType) =>
              onRedirectionClick(rowData)
            }
          />
        ))}
      </table>
      <div className={s.controls}>
        <div className={s.pageNumber}>
          <Typography
            label={`Page ${currentPage} of ${totalPages}`}
            variant={TypographyVariantTypes.Small}
            customStyle={{ fontWeight: "bold", color: "grey" }}
          />
        </div>
        <div className={s.buttonGroup}>
          <Button
            variant={ButtonVariantsType.PrimaryOutline}
            label="Previous"
            size={ButtonSizesType.Small}
            onClick={() => handlePageChange(currentPage - 1)}
            isDisabled={currentPage === 1}
          />
          <Button
            variant={ButtonVariantsType.PrimaryOutline}
            label="Next"
            size={ButtonSizesType.Small}
            onClick={() => handlePageChange(currentPage + 1)}
            isDisabled={currentPage === totalPages}
          />
        </div>
      </div>
    </>
  );
};

export default Table;

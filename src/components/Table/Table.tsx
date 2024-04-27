import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header, { HeaderType } from "./Header/Header";
import Row, { RowType } from "./Row/Row";

import { toast } from "react-toastify";
import {
  INIT_MODAL_DATA_VALUE,
  INIT_VIEW_ONLY_MODAL_VALUE,
} from "../../constants";
import usePageChange from "../../hooks/usePageChange";
import {
  ButtonSizesType,
  ButtonVariantsType,
} from "../../primitives/ButtonTypes";
import { TypographyVariantTypes } from "../../primitives/TypographyTypes";
import Button from "../ui/Button/Button";
import Typography from "../ui/Typography/Typography";
import ActionModal from "./ActionModal/ActionModal";
import s from "./Table.module.scss";
import ViewOnlyModal, {
  ViewOnlyModalDetails,
} from "./ViewOnlyModal/ViewOnlyModal";

export type TableProps = {
  headers: HeaderType;
  data: RowType[];
  setData: (data: RowType[]) => void;
  currentPage: number;
  totalPages: number;
  rowClickRedirectionUrl?: string;
};

type ModalDataType = {
  data: RowType | null;
  index: number;
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
  const [modalData, setModalData] = useState<ModalDataType>({
    ...INIT_MODAL_DATA_VALUE,
  });
  const [viewOnlyModalDetails, setViewOnlyModalDetails] =
    useState<ViewOnlyModalDetails>({ ...INIT_VIEW_ONLY_MODAL_VALUE });

  // custom hooks
  const navigate = useNavigate();
  const { handlePageChange } = usePageChange();

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

  const handleModalDataChange = (newRowData: RowType) => {
    const newData = [...data];
    newData[modalData.index] = newRowData;
    setData(newData);
    setModalData({ ...INIT_MODAL_DATA_VALUE });
    toast.success("Data updated successfully");
  };

  return (
    <>
      <table className={s.root}>
        <tbody>
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
              setModalData={() =>
                setModalData({
                  data: row,
                  index,
                })
              }
              setViewOnlyModalDetails={setViewOnlyModalDetails}
              onRowDataChange={(rowData: RowType) =>
                handleRowDataChange(rowData, index)
              }
              onRedirectionClick={(rowData: RowType) =>
                onRedirectionClick(rowData)
              }
            />
          ))}
        </tbody>
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

      <ActionModal
        data={modalData.data}
        onClose={() => setModalData({ ...INIT_MODAL_DATA_VALUE })}
        onDataChange={handleModalDataChange}
      />

      <ViewOnlyModal
        modalDetails={viewOnlyModalDetails}
        onClose={() =>
          setViewOnlyModalDetails({ ...INIT_VIEW_ONLY_MODAL_VALUE })
        }
      />
    </>
  );
};

export default Table;

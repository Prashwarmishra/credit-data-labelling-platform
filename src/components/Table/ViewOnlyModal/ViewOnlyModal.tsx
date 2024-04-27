import dayjs from "dayjs";
import { TypographyVariantTypes } from "../../../primitives/TypographyTypes";
import Modal from "../../ui/Modal/Modal";
import Typography from "../../ui/Typography/Typography";
import { HeaderType } from "../Header/Header";

import { DATE_TIME_FORMAT } from "../../../constants";
import s from "./ViewOnlyModal.module.scss";

export type ViewOnlyModalDetails = {
  title: string;
  headers: HeaderType;
  data: any[];
};

type ViewOnlyModalProps = {
  modalDetails: ViewOnlyModalDetails;
  onClose: () => void;
};

const ViewOnlyModal = ({ modalDetails, onClose }: ViewOnlyModalProps) => {
  // constants
  const { title, headers, data } = modalDetails;

  const renderValues = (key: string, value: any) => {
    if (typeof value === "string") {
      if (key === "updatedOn") {
        value = dayjs(new Date(value)).format(DATE_TIME_FORMAT);
      }
      return <Typography label={value} />;
    } else if (Array.isArray(value)) {
      return (
        <div>
          {value.map((elem: string) => (
            <Typography label={elem} key={elem} />
          ))}
        </div>
      );
    } else if (key === "recentEditor" && value?.fullName) {
      return <Typography label={value.fullName} />;
    }
  };

  const renderItem = (key: string, value: any) => {
    return (
      <div className={s.item} key={key}>
        <div className={s.key}>
          <Typography
            label={headers[key]}
            customStyle={{ fontWeight: "bold" }}
          />
        </div>

        <div className={s.value}>{renderValues(key, value)}</div>
      </div>
    );
  };

  if (!data?.length) return null;

  return (
    <Modal show onClose={onClose}>
      <div className={s.root}>
        <Typography label={title} variant={TypographyVariantTypes.H2} />
        <div className={s.container}>
          {data?.map((elem, index) => (
            <div className={s.element} key={index}>
              {Object.keys(elem).map((item) => renderItem(item, elem[item]))}
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default ViewOnlyModal;

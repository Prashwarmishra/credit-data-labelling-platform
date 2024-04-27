import { useEffect, useState } from "react";
import { TypographyVariantTypes } from "../../../primitives/TypographyTypes";
import Input from "../../ui/Input/Input";
import Modal from "../../ui/Modal/Modal";
import Typography from "../../ui/Typography/Typography";
import { RowType } from "../Row/Row";

import { ButtonVariantsType } from "../../../primitives/ButtonTypes";
import { getDeepCopy } from "../../../utils";
import { getUserCredentials } from "../../../utils/authentication";
import Button from "../../ui/Button/Button";
import s from "./ActionModal.module.scss";

type ActionModalProps = {
  data: RowType | null;
  onClose: () => void;
  onDataChange: (row: RowType) => void;
};

const ActionModal = ({ data, onClose, onDataChange }: ActionModalProps) => {
  // states
  const [inputValues, setInputValues] = useState<string[]>([]);

  const handleSubmit = () => {
    if (data) {
      const newData: RowType = {
        ...data,
        input: inputValues,
        updatedOn: new Date().toISOString(),
        recentEditor: getUserCredentials(),
        previousChanges: [
          ...data.previousChanges,
          getDeepCopy(data, ["isEditable", "isFlagged", "previousChanges"]),
        ],
      };

      onDataChange(newData);
    }
  };

  useEffect(() => {
    if (data?.input.length) {
      setInputValues(data.input);
    }
  }, [data]);

  if (!data) return null;
  return (
    <Modal show onClose={onClose}>
      <div className={s.root}>
        <Typography label={data.head} variant={TypographyVariantTypes.H2} />

        <Typography label={`Values in ${data.head}`} />

        <div className={s.inputContainer}>
          {data.input.map((item: string, index: number) => (
            <Input
              key={`${item}-${index}`}
              value={inputValues[index]}
              onChange={(e) => {
                const newInputValues = [...inputValues];
                newInputValues[index] = e.target.value;
                setInputValues(newInputValues);
              }}
            />
          ))}
        </div>

        <div className={s.buttonContainer}>
          <Button label="Submit" onClick={handleSubmit} />
          <Button
            label="Cancel"
            onClick={onClose}
            variant={ButtonVariantsType.PrimaryOutline}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ActionModal;

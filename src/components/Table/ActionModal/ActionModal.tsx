import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, useEffect, useState } from "react";
import { TypographyVariantTypes } from "../../../primitives/TypographyTypes";
import Input from "../../ui/Input/Input";
import Modal from "../../ui/Modal/Modal";
import Typography from "../../ui/Typography/Typography";
import { RowType } from "../Row/Row";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import {
  ButtonSizesType,
  ButtonVariantsType,
} from "../../../primitives/ButtonTypes";
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
  const [addedInputs, setAddedInputs] = useState<string[]>([]);

  const resetValues = () => {
    setInputValues([]);
    setAddedInputs([]);
  };

  const handleClose = () => {
    resetValues();
    onClose();
  };

  const handleSubmit = () => {
    if (data) {
      if (!inputValues.length && !addedInputs.length) {
        toast.error("Add atleast one field");
        return;
      }

      const isAnyFieldEmpty =
        inputValues.findIndex((val) => !val) !== -1 ||
        addedInputs.findIndex((val) => !val) !== -1;

      if (isAnyFieldEmpty) {
        toast.error("Add valid values to all the fields, or remove them");
        return;
      }

      const newData: RowType = {
        ...data,
        input: [...inputValues, ...addedInputs],
        updatedOn: new Date().toISOString(),
        recentEditor: getUserCredentials(),
        previousChanges: [
          ...data.previousChanges,
          getDeepCopy(data, ["isEditable", "isFlagged", "previousChanges"]),
        ],
      };

      resetValues();
      onDataChange(newData);
    }
  };

  const handleAddClick = () => {
    setAddedInputs([...addedInputs, ""]);
  };

  const handleRemoveExistingInput = (removeIndex: number) => {
    setInputValues(inputValues.filter((input, index) => index !== removeIndex));
  };

  const handleRemoveAddedInput = (removeIndex: number) => {
    setAddedInputs(addedInputs.filter((input, index) => index !== removeIndex));
  };

  const renderInput = (
    item: string,
    index: number,
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void,
    onRemoveButtonClick: (index: number) => void
  ) => {
    return (
      <div className={s.input} key={`${item}-${index}`}>
        <Input
          key={`${item}-${index}`}
          value={item}
          onChange={onInputChange}
          autoFocus
        />
        <Button
          label=""
          rightIcon={<FontAwesomeIcon icon={faMinus} />}
          variant={ButtonVariantsType.PrimaryOutline}
          onClick={() => onRemoveButtonClick(index)}
        />
      </div>
    );
  };

  useEffect(() => {
    if (data?.input.length) {
      setInputValues(data.input);
    }
  }, [data]);

  if (!data) return null;

  return (
    <Modal show onClose={handleClose}>
      <div className={s.root}>
        <Typography label={data.head} variant={TypographyVariantTypes.H2} />

        <div className={s.body}>
          <Typography label={`Values in ${data.head}`} />
          <div className={s.add}>
            <Button
              label="Add"
              rightIcon={<FontAwesomeIcon icon={faPlus} />}
              variant={ButtonVariantsType.PrimaryOutline}
              size={ButtonSizesType.Small}
              onClick={handleAddClick}
            />
          </div>
        </div>

        <div className={s.inputContainer}>
          {inputValues.map((item: string, index: number) =>
            renderInput(
              item,
              index,
              (e) => {
                const newInputValues = [...inputValues];
                newInputValues[index] = e.target.value;
                setInputValues(newInputValues);
              },
              handleRemoveExistingInput
            )
          )}

          {addedInputs.map((item: string, index: number) =>
            renderInput(
              item,
              index,
              (e) => {
                const newAddedInputValues = [...addedInputs];
                newAddedInputValues[index] = e.target.value;
                setAddedInputs(newAddedInputValues);
              },
              handleRemoveAddedInput
            )
          )}
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

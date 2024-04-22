import { createPortal } from "react-dom";
import s from "./Modal.module.scss";

type ModalProps = {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
  customStyle?: React.CSSProperties;
};

const Modal = ({ show, onClose, children, customStyle = {} }: ModalProps) => {
  if (!show) return null;
  return createPortal(
    <div
      className={s.root}
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <div
        className={s.box}
        onClick={(e) => e.stopPropagation()}
        style={customStyle}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;

import React, { FC } from "react";
import styles from "./style.module.scss";
import clsx from "clsx";
import Modal from "../modal";

type Props = {
  open: boolean;
  onClose: () => void;
};

export const ModalSuccess: FC<Props> = ({ onClose, open }) => {
  return (
    <Modal open={open} onClose={onClose} small>
      <div className={styles.modal}>
        <h2 className={styles.modal__title}>
          Thank you, your request is accepted
        </h2>
        <p className={styles.modal__text}>
          We will contact you soon and provide you with a commercial offer.
        </p>
        <button type="button" className={styles.modal__btn} onClick={onClose}>
          Ok
        </button>
      </div>
    </Modal>
  );
};

import React, { FC, useState } from "react";
import Modal from "../modal";
import styles from "./style.module.scss";

type Props = {
  open: boolean;
  onClose: () => void;
};

export const SuccesModal: FC<Props> = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className={styles.success}>
        <h3 className={styles.success__title}>
          Thank you, your request is accepted
        </h3>
        <p className={styles.success__desc}>
          We will contact you soon and provide you with a commercial offer.
        </p>
        <button className={styles.success__btn} onClick={onClose}>
          Ok
        </button>
      </div>
    </Modal>
  );
};

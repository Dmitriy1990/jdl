import React, { FC, useState } from "react";
import styles from "./style.module.scss";
import clsx from "clsx";
import Modal from "../modal";
import pdf from "../../assets/downloads/personal_data_rules.pdf";

type Props = {
  open: boolean;
  onClose: () => void;
  successModal: () => void;
};

export const ModalForm: FC<Props> = ({
  open,
  onClose,
  successModal,
}: Props) => {
  const [checked, setChecked] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClose();
    successModal();
  };
  return (
    <Modal open={open} onClose={onClose} small>
      <div className={styles.modal}>
        <h2 className={styles.modal__title}>LEAVE A MESSAGE</h2>
        <form onSubmit={onSubmit}>
          <label className={styles.modal__label}>Name</label>
          <input name="name" type="text" className={styles.modal__field} />
          <label className={styles.modal__label}>Email</label>
          <input name="email" type="email" className={styles.modal__field} />
          <label className={styles.modal__label}>Message</label>
          <textarea
            name="message"
            className={clsx(styles.modal__field, styles.modal__area)}
          ></textarea>
          <div className={styles["modal-agree"]}>
            <input
              type="checkbox"
              name="agree"
              id="agree"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            <label htmlFor="agree" className={styles.modal__check}>
              I agree with the{" "}
              <a href={pdf} target="_blank">
                rules of personal data processing
              </a>
            </label>
          </div>
          <button
            type="submit"
            className={styles.modal__btn}
            disabled={!checked}
          >
            Send
          </button>
        </form>
      </div>
    </Modal>
  );
};

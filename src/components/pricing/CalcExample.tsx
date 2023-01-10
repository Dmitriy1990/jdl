import React, { FC } from "react";
import Modal from "../modal";
import styles from "./style.module.scss";
import clsx from "clsx";

type Props = {
  open: boolean;
  onClose: () => void;
};

export const CalcExample: FC<Props> = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose} wide>
      <div className={styles.modal}>
        <h3 className={styles.modal__title}>
          An example of calculating an additional payment for exceeding the
          limit for players in one draw
        </h3>
        <ul>
          <li>
            You are using package "Mid" and have successfully completed the draw
            id 2 138
          </li>
          <li>
            Maximum number of participants within one draw in package "Mid" – 15
            000
          </li>
          <li>Participated in the draw id 2138 - 18 200 participants</li>
          <li>Limit exceeded: 18 200 – 15 000 = 3 200 participants</li>
          <li>Additional payment: 3 200 * $0,02/person = $64</li>
        </ul>
      </div>
    </Modal>
  );
};

import React, { FC } from "react";
import Modal from "../modal";
import styles from "./style.module.scss";
import clsx from "clsx";

type Obj = {
  id: number;
  texts: { ship: string; text: string }[];
};

type Props = {
  open: boolean;
  onClose: () => void;
  w210?: boolean;
  content: Obj | null;
};

export const ModalComponent: FC<Props> = ({
  open,
  onClose,
  w210,
  content,
}: Props) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className={styles.modal}>
        <h2 className={styles.modal__title}>
          What creates subconscious and emotional attention?
        </h2>
        <div className={styles["modal-content"]}>
          {content
            ? content.texts.map((j) => (
                <div className={styles["modal-inner"]} key={j.ship}>
                  <div className={styles["modal-left"]}>
                    <div className={styles.modal__ship}>{j.ship}</div>
                  </div>
                  <div className={styles["modal-right"]}>
                    <div
                      className={clsx(
                        styles.modal__text,
                        w210 && styles.maw210
                      )}
                    >
                      {j.text}
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </Modal>
  );
};

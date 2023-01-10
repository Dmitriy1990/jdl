import React, { FC, useState } from "react";
import Modal from "../modal";
import styles from "./style.module.scss";
import clsx from "clsx";
import Checkbox from "../checkbox";
import { pdf } from "../../assets";
import pdfl from "../../assets/downloads/personal_data_rules.pdf";

type Props = {
  open: boolean;
  onClose: () => void;
  openSuccess: () => void;
};

export const OfferModal: FC<Props> = ({ open, onClose, openSuccess }) => {
  const [check, setCheck] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    openSuccess();
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} wide={true}>
      <div className={styles.modal}>
        <h3 className={styles.modal__title}>
          Request for the commercial offer
        </h3>
        <p className={styles.modal__desc}>
          To receive our commercial offer, please fill out the form
        </p>
        <img className={styles.modal__img} src={pdf} alt="" />
        <form onSubmit={onSubmit}>
          <div className={styles["modal-form"]}>
            <div className={styles["modal-form-inner"]}>
              <div>
                <p className={styles["modal-form__label"]}>Name</p>
                <input type="text" className={styles["modal-form__field"]} />
              </div>
              <div>
                <p className={styles["modal-form__label"]}>Сompany name</p>
                <input type="text" className={styles["modal-form__field"]} />
              </div>
            </div>
            <div className={styles["modal-form-inner"]}>
              <div>
                <p className={styles["modal-form__label"]}>Email</p>
                <input type="email" className={styles["modal-form__field"]} />
              </div>
            </div>
            <div
              className={clsx(
                styles["modal-form-inner"],
                styles["modal-checkbox"]
              )}
            >
              <Checkbox
                name="3"
                checked={check}
                onChange={() => setCheck(!check)}
              >
                <p className={styles.modal__check}>
                  By clicking the button you agree to{" "}
                  <a href={pdfl} target="_blank">
                    the rules of personal data processing
                  </a>
                </p>
              </Checkbox>
              <button
                type="submit"
                className={styles["modal-form__btn"]}
                disabled={!check}
              >
                Get the commercial offer
              </button>
            </div>
            <div className={styles["modal-form-text"]}>
              <h4 className={styles["modal-form-text__title"]}>
                In the commercial offer you will
              </h4>
              <ul>
                <li>Get answers to potentially interesting questions</li>
                <li>
                  Get recommendations on how to increase the effectiveness of
                  our cooperation
                </li>
                <li>
                  Learn more about the implementation methodology and the cost
                  of our services
                </li>
                <li>
                  Get acquainted with the mathematics of mutually beneficial
                  cooperation and increased sales
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

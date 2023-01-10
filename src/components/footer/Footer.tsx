import React, { useState } from "react";

import styles from "./style.module.scss";

import { Link } from "react-scroll";
import clsx from "clsx";
import {
  IconLogoWhite3,
  IconSoc1,
  IconSoc2,
  IconSoc3,
  IconSoc4,
  IconSoc5,
  IconSoc6,
  IconCopyring,
  googleplay,
  appstore,
} from "../../assets";
import { ModalForm } from "./ModalForm";
import { ModalSuccess } from "./ModalSuccess";
import { OfferModal } from "../customers/OfferModal";
import { SuccesModal } from "../customers/SuccesModal";

export const Footer = () => {
  const [success, setSuccess] = useState(false);
  const [modalForm, setModalForm] = useState(false);
  const [offerForm, setOfferForm] = useState(false);
  const [offerFormSuccess, setOfferFormSuccess] = useState(false);
  const successModal = () => {
    setSuccess(true);
  };
  const successModalForm = () => {
    setOfferFormSuccess(true);
  };

  return (
    <footer className={styles.footer} id="about">
      <ModalSuccess open={success} onClose={() => setSuccess(false)} />

      <ModalForm
        successModal={successModal}
        open={modalForm}
        onClose={() => {
          setModalForm(false);
        }}
      />
      <SuccesModal
        open={offerFormSuccess}
        onClose={() => setOfferFormSuccess(false)}
      />
      <OfferModal
        openSuccess={successModalForm}
        open={offerForm}
        onClose={() => setOfferForm(false)}
      />
      <div className="container container--mob-nopad">
        <div className={styles["footer-inner"]}>
          <div className={styles["link-list"]}>
            <div className={styles["link-list__item"]}>
              <p>Games Website</p>
              <a href="/">justdoluck.com</a>
            </div>
            <div className={styles["link-list__item"]}>
              <p>Algorithms Website</p>
              <a href="/">algorithm.justdoluck.com</a>
            </div>
            <div className={styles["link-list__item"]}>
              <p>Participants Website</p>
              <a href="/">justdoluck.me</a>
            </div>

            <div className={styles["link-list__item"]}>
              <p>Clients Website</p>
              <a href="/">justdoluck.club</a>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles["content-inner"]}>
              <div className={styles["logo-wrap"]}>
                <div className={styles.logo}>
                  <IconLogoWhite3 />
                </div>
                <div className={styles.mb}>
                  <div className={styles.content__text}>
                    Still have questions?
                    <br /> You can always count on feedback
                  </div>
                  <button
                    className={styles.btn}
                    onClick={() => setModalForm(true)}
                  >
                    LEAVE A MESSAGE
                  </button>
                  <a
                    href="/"
                    className={clsx(styles.btn, styles["btn--orange"])}
                  >
                    PARTNERS SECTION
                  </a>
                </div>
                <button
                  className={styles.btn}
                  onClick={() => setOfferForm(true)}
                >
                  Get the commercial offer
                </button>
                <button
                  className={styles.btn}
                  // onClick={() => setModalForm(true)}
                >
                  Сalculator
                </button>
              </div>
              <div
                className={clsx(
                  styles["content-item"],
                  styles["content-item--text"]
                )}
              >
                <div className={styles.content__text}>
                  Still have questions?
                  <br /> You can always count on feedback
                </div>
                <button
                  className={styles.btn}
                  onClick={() => setModalForm(true)}
                >
                  LEAVE A MESSAGE
                </button>
                <a
                  href="/"
                  style={{ marginTop: 10 }}
                  className={clsx(styles.btn, styles["btn--orange"])}
                >
                  PARTNERS SECTION
                </a>
              </div>
            </div>
            <div className={clsx(styles["content-item"])}>
              <div>
                <p className={styles.content__label}>Support</p>
                <a
                  href="mailto:tech.support@justdoluck.com"
                  className={styles.content__email}
                >
                  support@justdoluck.com
                </a>
              </div>

              <div>
                <p className={styles.content__label}>Marketing</p>
                <a
                  href="mailto:oper.support@justdoluck.com"
                  className={styles.content__email}
                >
                  marketing@justdoluck.com
                </a>
              </div>
            </div>
            <div className={clsx(styles["content-item"])}>
              <div>
                <p className={styles.content__label}>Commercial</p>
                <a
                  href="mailto:sales@justdoluck.com"
                  className={styles.content__email}
                >
                  sales@justdoluck.com
                </a>
              </div>
              <div>
                <p className={styles.content__label}>
                  On personal data issues{" "}
                </p>
                <a
                  href="mailto:privacy@justdoluck.com"
                  className={styles.content__email}
                >
                  privacy@justdoluck.com
                </a>
              </div>
            </div>
          </div>
          <div className={styles["social-wrap"]}>
            <div className={styles.social}>
              <a
                href="/"
                className={clsx(styles["social-item"], "animated wow fadeInUp")}
                data-wow-offset="50"
                data-wow-delay="0.5s"
              >
                <IconSoc1 />
              </a>
              <a
                href="/"
                className={clsx(styles["social-item"], "animated wow fadeInUp")}
                data-wow-offset="50"
                data-wow-delay="0.6s"
              >
                <IconSoc2 />
              </a>
              {/* <a
              href="/"
              className={clsx(styles["social-item"], "animated wow fadeInUp")}
              data-wow-offset="50"
              data-wow-delay="0.7s"
            >
              <IconSoc3 />
            </a> */}
              <a
                href="/"
                className={clsx(styles["social-item"], "animated wow fadeInUp")}
                data-wow-offset="50"
                data-wow-delay="0.8s"
              >
                <IconSoc4 />
              </a>
              {/* <a
              href="/"
              className={clsx(styles["social-item"], "animated wow fadeInUp")}
              data-wow-offset="50"
              data-wow-delay="0.8s"
            >
              <IconSoc5 />
            </a> */}
              <a
                href="/"
                className={clsx(styles["social-item"], "animated wow fadeInUp")}
                data-wow-offset="50"
                data-wow-delay="0.8s"
              >
                <IconSoc6 />
              </a>
            </div>
            <div className={styles.store}>
              <p className={styles.store__label}>Download apps</p>
              <a href="/" className={styles.store__btn}>
                <img src={googleplay} alt="" />
              </a>
              <a href="/" className={styles.store__btn}>
                <img src={appstore} alt="" />
              </a>
            </div>
          </div>
          <div className={styles.copyring}>
            <IconCopyring /> 2022 - Just do luck Inc.
          </div>
        </div>
      </div>
    </footer>
  );
};

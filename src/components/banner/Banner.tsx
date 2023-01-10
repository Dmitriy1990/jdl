import React, { useEffect, useRef, useState, useCallback } from "react";
import styles from "./style.module.scss";
import clsx from "clsx";
import {
  bImage1,
  bImage2,
  bImage3,
  bImage4,
  bImage5,
  IconArrowDown,
  IconAtten,
  IconAttention,
  IconPlay,
  mac1,
  mac2,
  mac3,
} from "../../assets";
import Modal from "../modal";

export const Banner = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <section className={styles.banner} id="banner">
        <div className="container ">
          <div className={styles.images}>
            <span
              className={clsx(styles.img, styles.img1, "prl wow bounceInDown")}
              data-wow-delay="0.5s"
            >
              <img src={bImage1} alt="" data-depth=".3" />
            </span>
            <span
              className={clsx(styles.img, styles.img2, "prl wow bounceInDown")}
              data-wow-delay="0.3s"
            >
              <img src={bImage2} alt="" data-depth=".5" />
            </span>
            <span
              className={clsx(styles.img, styles.img3, "prl wow bounceInDown")}
              data-wow-delay="0.6s"
            >
              <img src={bImage3} alt="" data-depth=".4" />
            </span>
            <span
              className={clsx(styles.img, styles.img4, "prl wow bounceInDown")}
              data-wow-delay="0.5s"
            >
              <img src={bImage4} alt="" data-depth=".6" />
            </span>
            <span
              className={clsx(styles.img, styles.img5, "prl wow bounceInDown")}
              data-wow-delay="0.3s"
            >
              <img src={bImage5} alt="" data-depth=".4" />
            </span>
          </div>
          <h1 className={clsx(styles.h1, "animated fadeIn wow")}>
            They say that attention is the main currency of the 21st century
          </h1>
        </div>
      </section>
      <section className="container container--mob-nopad">
        <div className={styles.white}>
          <span className={clsx(styles.scroll, "animated wow bounce")}>
            <IconArrowDown />
          </span>
          <div className={clsx(styles.heading)}>
            <h2 className={clsx(styles.title, "animated fadeIn wow")}>
              Where there is attention, there is energy, manifestation,
              materialization
            </h2>
            <p className={styles.subtitle}>
              One of the basic laws of the Universe says
            </p>
          </div>
          <div className={styles.container}>
            <div className={styles.blocks}>
              <div className={styles.left}>
                <div
                  className={clsx(styles["left-inner"], "wow fadeInLeftBig")}
                >
                  <h3 className={styles.left__title}>
                    We offer advertising agencies a new interactive marketing
                    tool
                  </h3>
                  <p className={styles.left__desc}>
                    capable of generating the growing attention of the audience,
                    holding it and converting it into a targeted action.
                  </p>
                </div>
              </div>
              <div className={styles.right}>
                <div
                  className={clsx(
                    styles.card,
                    styles["card--one"],
                    "animated wow fadeInUpBig"
                  )}
                >
                  <img src={mac1} alt="" />
                  <div className={styles["card-describe"]}>
                    <h4 className={styles.card__title}>WE CREATE ATTENTION </h4>
                    <p className={styles.card__desc}>
                      Mass attention is a valuable and scarce resource! What the
                      society pays attention to - is multiplied!
                    </p>
                  </div>
                </div>
                <div
                  className={clsx(
                    styles.card,
                    styles["card--two"],
                    "animated wow fadeInUpBig"
                  )}
                >
                  <img src={mac2} alt="" />
                  <div className={styles["card-describe"]}>
                    <h4 className={styles.card__title}>HOLDING ATTENTION </h4>
                    <p className={styles.card__desc}>
                      With the help of the no-how-game mechanics we provide a
                      long-time selective concentration of consciousness
                    </p>
                  </div>
                </div>
                <div
                  className={clsx(
                    styles.card,
                    styles["card--three"],
                    "animated wow fadeInUpBig"
                  )}
                >
                  <img src={mac3} alt="" />
                  <div className={styles["card-describe"]}>
                    <h4 className={styles.card__title}>
                      MOTIVATE TO TARGET ACTION{" "}
                    </h4>
                    <p className={styles.card__desc}>
                      Emotions and triggers trigger conversion rates and sales
                      growth
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.heading2}>
              <h2 className="animated wow fadeInUpBig">
                What is just do luck?
              </h2>
              <p className="animated wow fadeInUpBig" data-wow-delay="0.2s">
                Just do luck is a B2B SaaS marketing platform designed for
                interactive free giveaways using a unique technology based on
                the principles of absolute fairness for people
              </p>
            </div>
            <div className={styles.propositions}>
              <h3
                className={clsx(
                  styles.propositions__title,
                  "animated wow fadeInLeftBig"
                )}
              >
                Value Proposition{" "}
              </h3>
              <p
                className={clsx(
                  styles.propositions__desc,
                  "animated wow fadeInRightBig"
                )}
              >
                <span>Just do luck</span>, an online interactive marketing
                technology service, helps advertising agencies meet their
                clients' needs for increased sales with a unique online tool
                that can continuously generate an increasing amount of emotional
                attention from their target audience.
              </p>
            </div>
            <div className={styles.note}>
              <div className={styles["note-left"]}>
                <p className={styles.note__text}>
                  The competition for the attention of the individual and the
                  attention of society is constantly increasing
                </p>
              </div>
              <div className={styles["note-center"]}>
                <IconAttention className={styles["note-center__round"]} />
                <IconAtten className={styles["note-center__atten"]} />
              </div>
              <div className={styles["note-right"]}>
                <p className={styles.note__text}>
                  primarily for its "capture":{" "}
                  <strong>
                    attraction, fascination, and evocation of emotion.
                  </strong>
                </p>
              </div>
            </div>
            <button
              className={clsx(styles.button)}
              onClick={() => setOpen(true)}
            >
              <IconPlay />
              HOW DOES IT WORK?
            </button>
            <Modal open={open} onClose={() => setOpen(false)} full>
              <div className={styles.modal}>
                <div className={styles["modal-video"]}>
                  <iframe
                    width="1264"
                    height="711"
                    src="https://www.youtube.com/embed/jXscmRDzBbc"
                    title="Как песчаные батареи могут изменить правила игры в хранении зеленой энергии"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </section>
    </div>
  );
};

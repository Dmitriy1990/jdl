import React from "react";
import styles from "./style.module.scss";
import clsx from "clsx";
import {
  IconArrowBottom,
  IconArrowTop,
  IconAsc,
  round1,
  round2,
  round3,
  round4,
  round5,
  round6,
  round7,
  IconArrBottomLeft,
  IconArrBottomRight,
} from "../../assets";
import ReactTooltip from "react-tooltip";
import shar5 from "../../assets/video/shar5.mov";
import shar6 from "../../assets/video/shar6.mov";
import shar7 from "../../assets/video/shar7.mov";

export const Attracting = () => {
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={clsx(styles.round, styles.round1)}>
          <img src={round1} alt="" />
        </div>
        <div className={clsx(styles.round, styles.round2)}>
          <img src={round2} alt="" />
        </div>
        <div className={clsx(styles.round, styles.round3)}>
          <video playsInline autoPlay muted loop src={shar6}></video>
        </div>
        <div className={clsx(styles.round, styles.round4)}>
          <img src={round4} alt="" />
        </div>
        <div className={clsx(styles.round, styles.round5)}>
          <img src={round5} alt="" />
        </div>
        <div className={clsx(styles.round, styles.round6)}>
          <video playsInline autoPlay muted loop src={shar5}></video>
        </div>
        <div className={clsx(styles.round, styles.round7)}>
          <video playsInline autoPlay muted loop src={shar7}></video>
        </div>
        <ReactTooltip
          id="main"
          place={"top"}
          type={"light"}
          effect={"float"}
          multiline={true}
          backgroundColor="#EAECF8"
          borderClass="tooltip-border"
          className="tooltip"
          clickable
        />
        <ReactTooltip
          id="main1"
          place={"bottom"}
          type={"light"}
          effect={"float"}
          multiline={true}
          backgroundColor="#EAECF8"
          borderClass="tooltip-border"
          className="tooltip"
          clickable
        />
        <div className={styles.attention}>
          <div className={styles.arrows}>
            <span className={styles.text}>ATTRACTING ATTENTION</span>

            <div className={styles.arrow}>
              <div className={styles.arrow}>
                <div className={styles.arrow__label}>
                  Subconscious attention{" "}
                  <IconAsc
                    data-for="main"
                    data-tip="Subconscious attention"
                    data-iscapture="true"
                  />
                </div>
                <div className={clsx(styles.widthanim, "wow")}>
                  <IconArrowTop />
                </div>
              </div>
              <div className={styles["center-arrow"]}></div>
              <div className={styles.arrow}>
                <div className={clsx(styles.widthanim, "wow")}>
                  <IconArrowBottom />
                </div>
                <div className={styles.arrow__label}>
                  Emotional Attention{" "}
                  <IconAsc
                    data-for="main1"
                    data-tip="Emotional Attention"
                    data-iscapture="true"
                  />
                </div>
              </div>
            </div>
            <span className={clsx(styles.text, styles["text--small"])}>
              INCREASE IN SALES
            </span>
          </div>
        </div>
        <div className={styles["arrows-mob"]}>
          <p className={styles["arrows-mob__text"]}>ATTRACTING ATTENTION</p>
          <div className={styles["arrows-mob-inner"]}>
            <div
              className={styles["arrows-mob__help"]}
              data-for="main"
              data-tip="Subconscious attention"
              data-iscapture="true"
            >
              <IconAsc />
              Subconscious attention
            </div>
            <IconArrBottomLeft
              className={clsx(styles.widthanim, "wow", styles.chev)}
            />
            <IconArrBottomRight
              className={clsx(styles.widthanim, "wow", styles.chev)}
            />
            <div
              className={styles["arrows-mob__help"]}
              data-for="main"
              data-tip="Emotional Attention"
              data-iscapture="true"
            >
              <IconAsc />
              Emotional Attention
            </div>
          </div>
          <p className={styles["arrows-mob__text"]}>INCREASE IN SALES</p>
        </div>
      </div>
    </div>
  );
};

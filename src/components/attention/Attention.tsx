import React from "react";
import styles from "./style.module.scss";
import clsx from "clsx";
import { attMain, att1, att2, att3, att4 } from "../../assets";

export const Attention = () => {
  return (
    <div className={styles.container}>
      <div className="container">
        <h2 className={clsx(styles.h2)}>
          There's always one entrance to the funnel - through the Attention
        </h2>
        <div className={styles.images}>
          <img src={attMain} alt="" className={styles.images__main} />
          <img src={att1} alt="" className={styles.images__one} />
          <img src={att2} alt="" className={styles.images__two} />
          <img src={att3} alt="" className={styles.images__three} />
          <img src={att4} alt="" className={styles.images__four} />
        </div>
      </div>
    </div>
  );
};

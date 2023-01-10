import React, { FC, useState } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { ArticleType } from "../../mock";
import Modal from "../modal";
// import { IconIn, IconMeta, IconTg, IconTw } from "../../assets";

type Props = {
  articles: ArticleType[];
  title: string;
};

export const Articles: FC<Props> = ({ articles, title }: Props) => {
  const [open, setOpen] = useState("");
  return (
    <div className={styles.article}>
      <Modal open={!!open} onClose={() => setOpen("")}>
        <div className={styles.modal}>
          <div dangerouslySetInnerHTML={{ __html: open }} />
        </div>
      </Modal>
      <div className="container">
        <div
          className={clsx(styles.heading, "animated wow fadeInLeft")}
          data-wow-offset="50"
          data-wow-delay="0.2s"
        >
          <div>
            <h2 className="h2 text-center">{title}</h2>
            <p className="f25 text-center">
              Gathering insight, thoughts, and intentions into text
              "collections”
            </p>
          </div>
        </div>
      </div>
      <div className={styles.list}>
        {articles.map((i, id) => (
          <div
            className={clsx(styles["list-item"], "animated wow fadeInUp")}
            data-wow-offset="50"
            data-wow-delay={`0.${3 + id}s`}
            key={i.id}
          >
            <img src={i.image} alt="" className={styles["list-item__img"]} />

            <div className={styles["list-item__bottom"]}>
              <h3 className={styles["list-item__title"]}>{i.title}</h3>
              <p className={styles["list-item__desc"]}>{i.desc}</p>
              <button
                className={styles.button}
                onClick={() => setOpen(i.modal)}
              >
                Read
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* <a
        href="/"
        className={clsx(styles.more, "animated wow fadeInUp")}
        data-wow-offset="50"
        data-wow-delay="0.4s"
      >
        More {title.toLocaleLowerCase()}
        <span></span>
        <span></span>
        <span></span>
      </a> */}
    </div>
  );
};

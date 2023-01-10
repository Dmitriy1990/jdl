import React, { FC, useState, useEffect } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { ArticleType, NewsType } from "../../mock";
import Modal from "../modal";
// import { IconIn, IconMeta, IconTg, IconTw } from "../../assets";

export const News = () => {
  const [open, setOpen] = useState("");
  const [part, setPart] = useState(3);

  const [news, setNews] = useState<NewsType[]>([]);
  const [modal, setModal] = useState("");
  const [loader, setLoader] = useState(true);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoader(true);
        let responce = await fetch("https://news.justdoluck.com/api/news");
        let json = await responce.json();
        if (json.success) {
          setNews(json.data.news);
        }
        setLoader(false);
      } catch (e) {
        console.log(e);
        setLoader(false);
      }
    })();
  }, []);

  const modalContent = async (id: number) => {
    try {
      setLoad(true);
      let responce = await fetch(`https://news.justdoluck.com/api/news/${id}`);
      let json = await responce.json();
      if (json.success) {
        const data: NewsType = json.data.news;
        const createMarkup = (html: string) => {
          let htmlUnscreeened = html
            .split("&gt;")
            .join(">")
            .split("&lt;")
            .join("<");
          return htmlUnscreeened;
        };
        const desc = data.description ? createMarkup(data.description) : "";
        console.log("desc", desc);
        const content = `
        <br />
          <br />
          <div></div>
          <h2>
            ${data.title}
          </h2>
          <div dangerouslySetInnerHTML={{ __html: ${data.shortDescription} }} />
            
          <img src="${data.photo}" />
          ${desc}
        `;
        setLoad(false);
        setOpen(content);
      }
    } catch (e) {
      console.log(e);
      setLoad(false);
    }
  };

  const addNews = () => {
    setPart(part + 3);
  };

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
            <h2 className="h2">News</h2>
            <p className="f25">
              Displaying milestones and processes for applying intuitive
              intelligence in a social environment
            </p>
          </div>
        </div>
      </div>
      <div className={styles.list}>
        {news.length
          ? news.slice(0, part).map((i, id) => (
              <div
                className={clsx(styles["list-item"], "animated wow fadeInUp")}
                data-wow-offset="50"
                data-wow-delay={`0.${3 + id}s`}
                key={i.id}
              >
                <img
                  src={i.photo}
                  alt=""
                  className={styles["list-item__img"]}
                />

                <div className={styles["list-item__bottom"]}>
                  <h3 className={styles["list-item__title"]}>{i.title}</h3>
                  <p className={styles["list-item__desc"]}>
                    {i.shortDescription}
                  </p>
                  <button
                    disabled={load}
                    className={styles.button}
                    onClick={() => modalContent(i.id)}
                  >
                    Read
                  </button>
                </div>
              </div>
            ))
          : null}
      </div>
      {news.length > part ? (
        <button className={styles.more} onClick={addNews}>
          More news <span></span>
          <span></span>
          <span></span>
        </button>
      ) : null}
    </div>
  );
};

import React, { useState, useRef, useEffect, FC } from "react";
import { IconMinus, IconPlus } from "../../assets";
// import { ReactComponent as Arrow } from "../../asset/svg/arrow.svg";
import styles from "./style.module.scss";

type Props = {
  data: { title: string; body: string }[];
};

export const Accordion: FC<Props> = ({ data }: Props) => {
  const [index, setIndex] = useState(0);
  const [height, setHeight] = useState("0");

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      setHeight(`${ref.current.scrollHeight}`);
    } else {
      setHeight("0");
    }
  }, [setHeight, ref]);

  const changeIndex = (id: number) => {
    if (index !== id) {
      setIndex(id);
    } else {
      setIndex(-1);
    }
  };

  return (
    <div>
      {data.map((section, ind) => {
        const isOpen = ind === index;
        return (
          <section key={ind}>
            <div className={styles.header} onClick={() => changeIndex(ind)}>
              <h3 className={styles.title}>{section.title}</h3>
              <div>{isOpen ? <IconMinus /> : <IconPlus />}</div>
            </div>
            <div
              className={styles.body}
              style={{
                minHeight: isOpen ? height + "px" : "0",
                height: isOpen ? "auto" : "0",
              }}
            >
              <div className={styles.innerBody} ref={ref}>
                {section.body}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

import React, { FC, ReactNode } from "react";
import styles from "./style.module.scss";

type Props = {
  children: ReactNode;
};

export const White: FC<Props> = ({ children }: Props) => {
  return <div className={styles.white}>{children}</div>;
};

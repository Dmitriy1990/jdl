import React, { FC } from "react";
import styles from "./style.module.scss";

type Props = {
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  name?: string;
};

export const SwitchComponent: FC<Props> = ({
  checked,
  onChange,
  id = "id",
  name,
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        name={name}
        id={id}
        type="checkbox"
        onChange={onChange}
        checked={checked}
      />
      <label className={styles.label} htmlFor={id} />
    </div>
  );
};

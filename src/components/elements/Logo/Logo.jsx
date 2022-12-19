import React from "react";
import styles from "./Logo.module.scss";

export default ({ dark }) => (
  <figure
    className={[styles.logo, dark ? styles.dark : styles.light].join(" ")}
  >
    <span className={styles.logotxt}>
      SAFARNI
    </span>
  </figure>
);

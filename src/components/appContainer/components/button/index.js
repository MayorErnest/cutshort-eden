import React from "react";

import styles from "./styles.module.css";

const Button = ({ text }) => {
  return <button className={styles.container}>{text}</button>;
};

export { Button };

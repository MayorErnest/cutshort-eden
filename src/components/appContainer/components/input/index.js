import React from "react";

import styles from "./styles.module.css";

const Input = ({ placeHolder, labelName }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={labelName}>{labelName}</label>
      <input type="text" id={labelName} placeholder={placeHolder} />
    </div>
  );
};

export { Input };

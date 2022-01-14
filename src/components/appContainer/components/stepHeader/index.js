import React from "react";

import styles from "./styles.module.css";

const StepHeader = ({ headerBig, headerSmall }) => {
  return (
    <div className={styles.container}>
      <h1>{headerBig}</h1>
      <h2>{headerSmall}</h2>
    </div>
  );
};

export { StepHeader };

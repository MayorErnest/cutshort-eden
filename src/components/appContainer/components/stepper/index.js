import React from "react";

import styles from "./styles.module.css";

const Stepper = ({ stepperState }) => {
  return (
    <div className={styles.container}>
      <div className={stepperState[0] ? styles.active : ""}>
        <span>1</span>
      </div>
      <div className={stepperState[1] ? styles.active : ""}>
        <span>2</span>
      </div>
      <div className={stepperState[2] ? styles.active : ""}>
        <span>3</span>
      </div>
      <div className={stepperState[3] ? styles.active : ""}>
        <span>4</span>
      </div>
    </div>
  );
};

export { Stepper };

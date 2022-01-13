import React, { useState } from "react";
import { Stepper } from "./components";

import styles from "./styles.module.css";

const AppContainer = () => {
  const [stepperState, setStepperState] = useState([1, 1, 1, 1]);
  return (
    <div className={styles.container}>
      <h1>Eden</h1>
      <Stepper stepperState={stepperState} />
    </div>
  );
};

export { AppContainer };

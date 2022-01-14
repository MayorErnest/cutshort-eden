import React, { useState } from "react";
import { Step1, Step2, Step3, Step4, Stepper } from "./components";

import styles from "./styles.module.css";

const AppContainer = () => {
  const [stepperState, setStepperState] = useState([1, 0, 0, 0]);
  return (
    <div className={styles.container}>
      <header>
        <h1>Eden</h1>
      </header>
      <Stepper stepperState={stepperState} />
      {!stepperState[1] ? (
        <Step1 />
      ) : stepperState[1] && !stepperState[2] ? (
        <Step2 />
      ) : stepperState[2] && !stepperState[3] ? (
        <Step3 />
      ) : (
        <Step4 />
      )}
    </div>
  );
};

export { AppContainer };

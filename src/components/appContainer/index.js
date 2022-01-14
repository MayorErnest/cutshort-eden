import React, { useCallback, useState } from "react";
import { EdenLogo } from "../../assets";
import { Step1, Step2, Step3, Step4, Stepper } from "./components";

import styles from "./styles.module.css";

const AppContainer = () => {
  const [stepperState, setStepperState] = useState([1, 0, 0, 0]);

  const handleChangeStep = useCallback((arrayState) => {
    setStepperState(arrayState);
  }, []);

  return (
    <div className={`${styles.container} container`}>
      <header>
        <EdenLogo />
        <h1>Eden</h1>
      </header>
      <Stepper stepperState={stepperState} />
      <div className={styles["step-container"]}>
        {!stepperState[1] ? (
          <Step1 onChange={handleChangeStep} />
        ) : stepperState[1] && !stepperState[2] ? (
          <Step2 onChange={handleChangeStep} />
        ) : stepperState[2] && !stepperState[3] ? (
          <Step3 onChange={handleChangeStep} />
        ) : (
          <Step4 />
        )}
      </div>
    </div>
  );
};

export { AppContainer };

import React from "react";
import { Button, Input, StepHeader } from "..";

import styles from "./styles.module.css";

const Step1 = () => {
  return (
    <div className={styles.container}>
      <StepHeader
        headerBig={"Welcome! First things first..."}
        headerSmall={"You can always change them later."}
      />
      <form>
        <Input labelName={"Full Name"} placeHolder={"Steve Jobs"} />
        <Input labelName={"Display Name"} placeHolder={"Steve"} />
        <Button text="Create Workspace" />
      </form>
    </div>
  );
};

export { Step1 };

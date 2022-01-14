import React from "react";
import { Button, Input, StepHeader, Form } from "..";

import styles from "./styles.module.css";

const Step1 = ({ onChange }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onChange([1, 1, 0, 0]);
  };
  return (
    <div className={styles.container}>
      <StepHeader
        headerBig={"Welcome! First things first..."}
        headerSmall={"You can always change them later."}
      />
      <Form onSubmit={handleFormSubmit}>
        <Input labelName={"Full Name"} placeHolder={"Steve Jobs"} />
        <Input labelName={"Display Name"} placeHolder={"Steve"} />
        <Button text="Create Workspace" />
      </Form>
    </div>
  );
};

export { Step1 };

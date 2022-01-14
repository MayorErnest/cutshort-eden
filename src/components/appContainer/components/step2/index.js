import React from "react";
import { Button, Input, StepHeader, Form } from "..";

import styles from "./styles.module.css";

const Step2 = ({ onChange }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onChange([1, 1, 1, 0]);
  };
  return (
    <div className={styles.container}>
      <StepHeader
        headerBig={"Let's set up a home for all your work"}
        headerSmall={"You can always create another workspace later."}
      />
      <Form onSubmit={handleFormSubmit}>
        <Input labelName={"Workspace Name"} placeHolder={"Eden"} />
        <Input
          labelName={
            <>
              Workspace URL{" "}
              <span style={{ color: "var(--app-ash)" }}>(optional)</span>
            </>
          }
          placeHolder={"Steve"}
          extended={"www.eden.com/"}
        />
        <Button text="Create Workspace" />
      </Form>
    </div>
  );
};

export { Step2 };

import React from "react";
import { Button, Form, StepHeader } from "..";
import { CircleTick } from "../../../../assets";

import styles from "./styles.module.css";

const Step4 = () => {
  return (
    <div className={styles.container}>
      <div className={styles["tick-box"]}>
        <CircleTick />
      </div>
      <StepHeader
        headerBig={"Congratulations, Eren!"}
        headerSmall={
          "You have completed onboarding, you can start using the Eden!"
        }
      />
      <Form>
        <Button text="Launch Eden" />
      </Form>
    </div>
  );
};

export { Step4 };

import React from "react";
import { Button, Form, StepHeader } from "..";

const Step4 = () => {
  return (
    <div>
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

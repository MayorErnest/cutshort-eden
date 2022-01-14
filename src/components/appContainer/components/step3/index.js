import React from "react";
import { Button, Form, StepHeader } from "..";

const Step3 = ({ onChange }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onChange([1, 1, 1, 1]);
  };
  return (
    <div>
      <StepHeader
        headerBig={"How are you planning to use Eden?"}
        headerSmall={"We'll streamline your setup experience accordingly"}
      />
      <Form onSubmit={handleFormSubmit}>
        <Button text="Create Workspace" />
      </Form>
    </div>
  );
};

export { Step3 };

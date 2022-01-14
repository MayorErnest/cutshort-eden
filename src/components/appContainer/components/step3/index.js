import React, { useCallback, useState } from "react";
import { Button, Form, StepHeader } from "..";
import { User, UserGroup } from "../../../../assets";
import { Card } from "./components";

import styles from "./styles.module.css";

const Step3 = ({ onChange }) => {
  const [activeCard, setActiveCard] = useState([1, 0]);

  const handleCardClick = useCallback((value) => {
    setActiveCard(value);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onChange([1, 1, 1, 1]);
  };
  return (
    <div className={styles.container}>
      <StepHeader
        headerBig={"How are you planning to use Eden?"}
        headerSmall={"We'll streamline your setup experience accordingly"}
      />
      <Form onSubmit={handleFormSubmit}>
        <div className={styles["card-container"]}>
          <Card
            active={activeCard[0]}
            icon={<User />}
            header="For myself"
            paragraph="Write better. Think more clearly. Stay organized"
            onClick={() => handleCardClick([1, 0])}
          />
          <Card
            active={activeCard[1]}
            icon={<UserGroup />}
            header="With my team"
            paragraph="Wikis, docs, tasks &amp; projects, all in one place."
            onClick={() => handleCardClick([0, 1])}
          />
        </div>
        <Button text="Create Workspace" />
      </Form>
    </div>
  );
};

export { Step3 };

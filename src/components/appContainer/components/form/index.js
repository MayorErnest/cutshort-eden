import React from "react";

import styles from "./styles.module.css";

const Form = ({ children, ...rest }) => {
  return (
    <form className={styles.container} {...rest}>
      {children}
    </form>
  );
};

export { Form };

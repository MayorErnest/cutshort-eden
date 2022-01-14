import React from "react";

import styles from "./styles.module.css";

const Card = ({ icon, header, paragraph, active, ...rest }) => {
  return (
    <div
      className={`${styles.container} ${active ? styles["active"] : ""}`}
      {...rest}
    >
      {icon}
      <h2>{header}</h2>
      <p>{paragraph}</p>
    </div>
  );
};

export { Card };

import React from "react";
import { Typography } from "@mui/material";
import styles from "./title.module.css";

function Title({text}) {
  return (
    <>
      <Typography
        variant="h2"
        gutterBottom
        className={styles.title}
        align="left"
      >
        {text}
      </Typography>
    </>
  );
}

export default Title;

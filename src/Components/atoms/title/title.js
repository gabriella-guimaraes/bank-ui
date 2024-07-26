import React from "react";
import { Typography } from "@mui/material";
import styles from "./title.module.css";

function Title({text, align}) {
  return (
    <>
      <Typography
        variant="h2"
        gutterBottom
        className={styles.title}
        align={align}
      >
        {text}
      </Typography>
    </>
  );
}

export default Title;

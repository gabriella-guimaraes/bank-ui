import React from "react";
import styles from "./badge.module.css";
import { Grid } from "@mui/material";

function Badge({title, text}) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      className={styles.note}
    >
      <div className={styles.badge}>
        <span>{title}</span>
      </div>
      <span>
        {text}
      </span>
    </Grid>
  );
}

export default Badge;

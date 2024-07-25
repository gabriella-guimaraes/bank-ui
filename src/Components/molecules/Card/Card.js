import * as React from "react";
import styles from "./Card.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Grid, Typography } from "@mui/material";

function CardComponent({ Icon, title, description }) {
  return (
    <div className={styles.card}>
      <Card sx={{ minWidth: 235, maxWidth: 370, backgroundColor: "#0C0F14" }}>
        <CardContent>
          <Grid
          container
          direction="column"
          justifyContent="space-around"
          alignItems="flex-start"
          >
          <div className={styles.icon}>{Icon && <Icon fontSize="large" />}</div>

          <Typography variant="h3" sx={{ fontSize: 24 }} gutterBottom className={styles.title}>
            {title}
          </Typography>
          <Typography variant="body1" align="justify" className={styles.desc}>{description}</Typography>

          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default CardComponent;

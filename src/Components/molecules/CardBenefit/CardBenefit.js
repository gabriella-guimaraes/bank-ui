import React from "react";
import { Grid, Typography } from "@mui/material";
import Link from "next/link";
import styles from "./CardBenefit.module.css";

function CardBenefit({ Icon, title, description, link, info }) {
  return (
    <Grid item xs={12} sm={3} md={3} className={title === "Abertura Zero" ? styles.card : ""}>
      <div className={styles.cardContent}>
        <Icon fontSize="large" className={styles.icon} />
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        {description.map((desc, idx) => (
          <Typography key={idx} variant="body2" component={title === "Menos Tarifas" ? "li" : "p"}>
            {desc}
          </Typography>
        ))}
        {link && link.map((item, idx) => (
          item.href && item.text && (
            <Typography key={idx} variant="body2" gutterBottom>
              <Link href={item.href} className={styles.link}>
                {item.text}
              </Link>
            </Typography>
          )
        ))}
        {info && (
          <Typography
            variant="body2"
            gutterBottom
            sx={{ fontWeight: 600, marginTop: 3 }}
          >
            {info}
          </Typography>
        )}
      </div>
    </Grid>
  );
}

export default CardBenefit;

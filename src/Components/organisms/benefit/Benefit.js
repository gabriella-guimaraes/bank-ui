import React from 'react';
import styles from "./Benefit.module.css";
import { Grid } from '@mui/material';
import CardBenefit from '@/Components/molecules/CardBenefit/CardBenefit';

function Benefit({ cardInfo }) {
  return (
    <Grid
    container
    direction="row"
    justifyContent="space-evenly"
    alignItems="flex-start"
    className={styles.cardWrapper}
  >
    {cardInfo.map((info, idx) => (
      <CardBenefit key={idx} {...info} />
    ))}
  </Grid>
  )
}

export default Benefit;
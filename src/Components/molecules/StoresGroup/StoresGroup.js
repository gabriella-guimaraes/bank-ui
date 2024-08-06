import React from 'react';
import { Grid } from '@mui/material';
import StoreBtn from '@/Components/atoms/StoreBtn/StoreBtn';
import AppleStore from '@/Components/icons/appleStore';
import PlayStore from '@/Components/icons/playStore';
import styles from "./StoresGroup.module.css";

function StoresGroup() {
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center">
      <Grid item xs={12} className={styles.btnWrapper}>
        <StoreBtn icon={PlayStore} />
      </Grid>
      <Grid item xs={12} className={styles.btnWrapper}>
        <StoreBtn icon={AppleStore} />
      </Grid>
    </Grid>
  )
}

export default StoresGroup
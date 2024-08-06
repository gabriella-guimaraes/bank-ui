import React from 'react';
import styles from "./StoreBtn.module.css";
import { Button } from '@mui/material';

function StoreBtn({ icon: Icon }) {
  return (
    <Button variant="outlined" className={styles.btn} >
      <Icon />
    </Button>
  )
}

export default StoreBtn;
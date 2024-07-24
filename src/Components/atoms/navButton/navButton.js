import React from 'react';
import { Button } from '@mui/material';
import styles from "./navButton.module.css";

function NavButton({ variant, onClick, children }) {
  return (
    <Button
    variant={variant} onClick={onClick} className={styles.button} >
        {children}
    </Button>
  )
}

export default NavButton;
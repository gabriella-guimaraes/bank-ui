import React from 'react';
import styles from "./globalAccount.module.css";
import GlobalAccount from '@/Components/icons/globalAccount';

function GlobalAccountLogo() {
  return (
    <div className={styles.GlobalAccLogo}>
          <GlobalAccount />
    </div>
  )
}

export default GlobalAccountLogo;
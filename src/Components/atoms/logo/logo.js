import React from 'react';
import styles from "./logo.module.css";
import BankIcon from "../../icons/logo";

function Logo() {
  return (
    <div className={styles.logo}>
      <BankIcon />
    </div>
  )
}

export default Logo;
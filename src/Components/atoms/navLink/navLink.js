import React from 'react'
import { Link } from '@mui/material';
import styles from "./navLink.module.css";

function NavLink({ href, children, onMouseEnter, onMouseLeave }) {
  return (
    <Link
      href={href}
      underline="none"
      className={styles.menuItem}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </Link>
  )
}

export default NavLink;
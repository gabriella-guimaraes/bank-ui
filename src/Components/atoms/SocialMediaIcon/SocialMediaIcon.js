import { Grid } from '@mui/material'
import React from 'react'
import styles from './SocialMediaIcon.module.css'

function SocialMediaIcon({ Icon }) {
  return (
    <Grid item xs={3} className={styles.icon}>
      <Icon />
    </Grid>
  )
}

export default SocialMediaIcon;
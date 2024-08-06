import LinkItem from '@/Components/atoms/LinkItem/LinkItem'
import { Grid, Typography } from '@mui/material'
import React from 'react';
import styles from "./Links.module.css";

function Links({ links }) {
  return (
    <>
      {links.map((link) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          key={link.id}
          className={styles.content}
        >
          <Typography
            variant="body1"
            align="left"
            gutterBottom
            sx={{ color: `var(--primary)`, marginBottom: 2 }}
          >
            {link.title}
          </Typography>
          {link.items.map((item) => (
            <LinkItem key={item.id} name={item.name} />
          ))}
        </Grid>
      ))}
    </>
  )
}

export default Links
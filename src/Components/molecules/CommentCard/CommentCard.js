import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import  PersonIcon  from '@mui/icons-material/Person';
import  StarIcon  from '@mui/icons-material/Star';
import styles from "./CommentCard.module.css";

function CommentCard({ user, comment }) {
  return (
    <Grid item xs={12} sm={4} md={4}>
      <Card
        sx={{
          minWidth: 235,
          maxWidth: 400,
          backgroundColor: "#0C0F14",
        }}
      >
        <CardContent>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={2} sm={2} md={2} className={styles.icon}>
              <PersonIcon fontSize="large" />
            </Grid>
            <Grid item xs={10} sm={10} md={10} className={styles.stars}>
              <StarIcon fontSize="small" />
              <StarIcon fontSize="small" />
              <StarIcon fontSize="small" />
              <StarIcon fontSize="small" />
              <StarIcon fontSize="small" />

              <Typography
                variant="subtitle2"
                gutterBottom
                className={styles.userName}
              >
                {user}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <Typography variant="body1" className={styles.desc}>
                {comment}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default CommentCard;
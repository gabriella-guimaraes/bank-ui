import React from 'react';
import { Grid } from '@mui/material';
import CommentCard from '@/Components/molecules/CommentCard/CommentCard';
import styles from "./Comment.module.css";

function Comment({ comments }) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      className={styles.cards}
    >
      {comments.map((comment) => (
        <CommentCard key={comment.id} user={comment.user} comment={comment.comment} />
      ))}
    </Grid>
  )
}

export default Comment;
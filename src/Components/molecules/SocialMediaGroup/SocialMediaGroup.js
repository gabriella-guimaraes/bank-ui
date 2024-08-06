import React from 'react'
import styles from './SocialMediaGroup.module.css'
import SocialMediaIcon from '@/Components/atoms/SocialMediaIcon/SocialMediaIcon';
import InstagramIcon  from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import TikTok from '@/Components/icons/tiktok';
import { Grid } from '@mui/material';

function SocialMediaGroup() {
  return (
    <Grid container direction="row" justifyContent="space-evenly" alignItems="center" className={styles.icons}>
      <SocialMediaIcon Icon={InstagramIcon} />
      <SocialMediaIcon Icon={TikTok} />
      <SocialMediaIcon Icon={YouTubeIcon} />
      <SocialMediaIcon Icon={XIcon} />
    </Grid>
  )
}

export default SocialMediaGroup;
"use client"

import { Button, Grid, useTheme, useMediaQuery } from "@mui/material"
import styles from "./Account.module.css"

function Account() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid 
    container
    direction={isSmallScreen ? "column" : "row"}
    justifyContent={isSmallScreen ? "center" : "flex-start"}
    alignItems="center"
    className={styles.container}>
        <div className={styles.btn}>
            <Button variant="contained" size="large">Baixar app</Button>
            <Button variant="outlined" size="large">Já tenho conta</Button>
        </div>
    </Grid>
  )
}

export default Account

// TODO: Ajustar a responsividade: Os botões devem ser exibidos em coluna para telas menores
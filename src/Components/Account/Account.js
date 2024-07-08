import { Button, Grid } from "@mui/material"
import styles from "./Account.module.css"

function Account() {
  return (
    <Grid 
    container
    direction="row"
    justifyContent="flex-start"
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
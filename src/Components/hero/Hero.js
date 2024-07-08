import { Container, Grid, Typography } from "@mui/material";
import styles from "./Hero.module.css";
import GlobalAccount from "../icons/globalAccount";
import Account from "../Account/Account";

function Hero() {
  return (
    <div className={styles.container}>
      <Container maxWidth="lg" className={styles.content}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          className={styles.note}
        >
          <div className={styles.badge}>
            <span>Novidade</span>
          </div>
          <span>
            Agora você pode contar com spread que pode chegar a apenas 0,75%
          </span>
        </Grid>
        <div className={styles.GlobalAccLogo}>
          <GlobalAccount />
        </div>
        <div className={styles.intro}>
          <Typography variant="h1" gutterBottom align="left" sx={{ fontWeight: '400 !important' }}>Conta internacional:
          câmbio 24h de dólar e euro com menos tarifas</Typography>
          <Typography variant="body1" gutterBottom>Compras e transferências internacionais e muito mais. Tudo no mesmo app da sua conta no Brasil.</Typography>
        </div>

        <Account />
      </Container>
    </div>
  );
}

export default Hero;

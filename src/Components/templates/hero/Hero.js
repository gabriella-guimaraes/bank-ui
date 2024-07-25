import { Container, Grid, Typography } from "@mui/material";
import styles from "./Hero.module.css";
import Account from "../../atoms/Account/Account";
import Badge from "../../atoms/badge/badge";
import GlobalAccountLogo from "../../atoms/globalAccount/globalAccount";

function Hero() {
  return (
    <div className={styles.container}>
      <Container maxWidth="lg" className={styles.content}>
        <Badge title="Novidade" text="Agora você pode contar com spread que pode chegar a apenas 0,75%" />
        <GlobalAccountLogo />
        <div className={styles.intro}>
          <Typography variant="h1" gutterBottom align="left" sx={{ fontWeight: '400 !important' }}>Conta internacional:
          câmbio 24h de dólar e euro com menos tarifas</Typography>
          <Typography variant="body1" gutterBottom>Compras e transferências internacionais e muito mais. Tudo no mesmo app da sua conta no Brasil.</Typography>
        </div>

        <div className={styles.accountBtn}>
          <Account />
        </div>
      </Container>
    </div>
  );
}

export default Hero;
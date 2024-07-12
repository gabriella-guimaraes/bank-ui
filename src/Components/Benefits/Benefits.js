import { Grid, Typography } from "@mui/material";
import styles from "./Benefits.module.css";
import cards from "../../assets/credit-cards.png";
import Image from "next/image";
import Account from "../Account/Account";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import MoneyOffCsredOutlinedIcon from "@mui/icons-material/MoneyOffCsredOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import Link from "next/link";

function Benefits() {
  return (
    <div className={styles.benefits}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={styles.container}
      >
        <Grid item xs={12} md={12}>
          <Typography variant="h2" align="center" className={styles.title} gutterBottom>
            Economize até 8% em todos os seus gastos internacionais
          </Typography>
        </Grid>

        <Grid item xs={12} md={12}>
          <Typography variant="body1" gutterBottom>
            Transparência, praticidade e menos tarifas em comparação com o
            cartão de crédito internacional.
          </Typography>
        </Grid>

        <Grid item xs={12} md={12}>
          <Image src={cards} className={styles.img} alt="C6 Bank credit cards" />
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex-start"
        className={styles.cardWrapper}
      >
        <Grid item xs={12} md={3}>
          <div className={styles.cardContent}>
            <LeaderboardOutlinedIcon fontSize="large" className={styles.icon} />
            <Typography variant="h5" gutterBottom>
              Menos Tarifas
            </Typography>

            <Grid
              container
              direction="column"
              justifyContent="space-evenly"
              alignItems="flex-start"
            >
              <Grid item xs={12} md={12}>
                <Typography variant="body2">
                  IOF: 1,1% (envio) e 0,38% (retorno) <br />
                  Spread:
                </Typography>
              </Grid>

              <Grid item xs={12} md={12}>
                <>
                  <Typography variant="body2" component="li">
                    0,90% para valores entre 20 e 999,99 (dólar e euro)
                  </Typography>
                  <Typography variant="body2" component="li">
                    0,85% para valores entre 1.000 e 4999,99 (dólar e euro)
                  </Typography>
                  <Typography variant="body2" component="li">
                    0,75% para valores a partir de 5.000 (dólar e euro)
                  </Typography>
                </>
              </Grid>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={12} md={4} className={styles.card}>
          <div className={styles.cardContent}>
            <MoneyOffCsredOutlinedIcon
              fontSize="large"
              className={styles.icon}
            />
            <Typography variant="h5" gutterBottom>
              Abertura Zero
            </Typography>
            <Typography variant="body2" gutterBottom>
              Basta fazer câmbio de US$ 100 ou € 100 ou mais até o último dia do
              mês seguinte à abertura da C6 Conta Global (o estorno da taxa de
              abertura de US$ 10 será creditado em até 15 dias após a
              transação.)
              <br/>
              <Link href="#" className={styles.link}>
                Confira mais informações aqui.
              </Link>
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ fontWeight: 600, marginTop: 3 }}>
              Demais casos: US$ 10
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12} md={3}>
          <div className={styles.cardContent}>
            <AccessTimeOutlinedIcon fontSize="large" className={styles.icon} />
            <Typography variant="h5" gutterBottom>
              Mensalidade Zero
            </Typography>
            <Typography variant="body2">Sem nenhum custo mensal.</Typography>
          </div>
        </Grid>
      </Grid>

      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={styles.container}
      >
        <Grid item xs={12} md={12}>
          <Account />
        </Grid>
      </Grid>
    </div>
  );
}

export default Benefits;

//TODO:
// 1 - remover o background da imagem
// 2 - Criar os cards de vantagens

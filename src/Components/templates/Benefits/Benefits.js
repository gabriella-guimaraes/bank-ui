import { Grid, Typography } from "@mui/material";
import styles from "./Benefits.module.css";
import cards from "../../../assets/credit-cards.png";
import Image from "next/image";
import Account from "../../atoms/Account/Account";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import MoneyOffCsredOutlinedIcon from "@mui/icons-material/MoneyOffCsredOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import Link from "next/link";
import Title from "@/Components/atoms/title/title";
import Benefit from "@/Components/organisms/benefit/Benefit";

function Benefits() {
  const cardInfo = [
    {
      Icon: LeaderboardOutlinedIcon,
      title: "Menos Tarifas",
      description: [
        "0,90% para valores entre 20 e 999,99 (dólar e euro)",
        "0,85% para valores entre 1.000 e 4999,99 (dólar e euro)",
        "0,75% para valores a partir de 5.000 (dólar e euro)"
      ]
    },
    {
      Icon: MoneyOffCsredOutlinedIcon,
      title: "Abertura Zero",
      description: ["Basta fazer câmbio de US$ 100 ou € 100 ou mais até o último dia do mês seguinte à abertura da C6 Conta Global (o estorno da taxa de abertura de US$ 10 será creditado em até 15 dias após a transação.)"],
      link: [
        {
          text: "Confira mais informações aqui.",
          href: "#"
        }
      ],
      info: "Demais casos: US$ 10"
    },
    {
      Icon: AccessTimeOutlinedIcon,
      title: "Mensalidade Zero",
      description: ["Sem nenhum custo mensal."]

    }
  ];

  return (
    <div className={styles.benefits}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={styles.container}
      >
        <Grid item xs={12} sm={12} md={12}>
          <Title text="Economize até 8% em todos os seus gastos internacionais" align="center" />
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="body1" gutterBottom>
            Transparência, praticidade e menos tarifas em comparação com o
            cartão de crédito internacional.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <Image src={cards} className={styles.img} alt="C6 Bank credit cards" />
        </Grid>
      </Grid>

      <Benefit cardInfo={cardInfo} />

      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={styles.container}
        maxWidth="lg"
      >
        <div className={styles.btn} >
          <Account />
        </div>
      </Grid>
    </div>
  );
}

export default Benefits;

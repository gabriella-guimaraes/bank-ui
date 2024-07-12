"use client";

import React, { useRef, useState, useEffect } from "react";
import styles from "./About.module.css";
import { Grid, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import cover_img from "../../assets/C6-model-1.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import StyleOutlinedIcon from "@mui/icons-material/StyleOutlined";
import MoneyOffCsredOutlinedIcon from "@mui/icons-material/MoneyOffCsredOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import CoffeeOutlinedIcon from "@mui/icons-material/CoffeeOutlined";
import CardComponent from "../Card/Card";
import Account from "../Account/Account";

const cards = [
  {
    Icon: PhoneAndroidIcon,
    title: "Integrada com seu banco do dia a dia",
    description:
      "Sua vida financeira em real, dólar e euro em um só app, sem precisar ficar mandando dinheiro para lá e para cá.",
  },
  {
    Icon: CurrencyExchangeIcon,
    title: "Câmbio em 2 segundos",
    description:
      "Câmbio instantâneo 24h pelo app, sem burocracia, para aproveitar quedas na cotação ou comprar mais moeda durante sua viagem.",
  },
  {
    Icon: StarBorderIcon,
    title: "Reconhecida por quem entende",
    description:
      "Além de ter sido a primeira conta em dólar e euro do Brasil, a C6 Conta Global também foi reconhecida como a melhor pelo prêmio O Melhor de Viagem e Turismo.",
  },
  {
    Icon: AccountBalanceOutlinedIcon,
    title: "Transferência entre contas",
    description:
      "É fácil dividir os custos durante a viagem. Basta fazer uma transferência de uma C6 Conta Global para outra de mesma modalidade! Cai na hora, sem custos.",
  },
  {
    Icon: EventAvailableOutlinedIcon,
    title: "Câmbio programado",
    description:
      "Câmbio automático quando a moeda atingir a cotação que você escolher.",
  },
  {
    Icon: LanguageOutlinedIcon,
    title: "No mundo todo",
    description:
      "O cartão da C6 Conta Global funciona em qualquer país - spread adicional para compras e saques em outras moedas é de 2%.",
  },
  {
    Icon: StyleOutlinedIcon,
    title: "4,38% nunca mais",
    description:
      "Cotação comercial, IOF de só 1,1% e spread mais baixo - a economia média é de até 8% em relação ao cartão de crédito!",
  },
  {
    Icon: MoneyOffCsredOutlinedIcon,
    title: "Sem mensalidade",
    description:
      "Você não gasta mais com mensalidade, anuidade ou taxa de manutenção.",
  },
  {
    Icon: LocalAtmOutlinedIcon,
    title: "Adeus, doleira",
    description:
      "Saque grátis na rede Chase dos EUA, com mais de 15 mil caixas. Conte também com milhões de caixas Cirrus ao redor do mundo (US$ 5 ou € 5 por saque).",
  },
  {
    Icon: CreditCardOutlinedIcon,
    title: "Cartão de débito internacional Mastercard",
    description:
      "Débito para fazer pagamentos em lojas, restaurantes, hotéis, sites e apps de qualquer lugar do mundo.",
  },
  {
    Icon: PaymentsOutlinedIcon,
    title: "Cartões adicionais",
    description:
      "Para todo mundo da família viajar com praticidade e autonomia - e você acompanha tudo pelo app. Cada adicional terá custo de R$25.",
  },
  {
    Icon: CreditCardOutlinedIcon,
    title: "Aproxime e Pague",
    description:
      "Os cartões da C6 Conta Global fazem pagamentos por aproximação. Funciona até no metrô de várias cidades do mundo!",
  },
  {
    Icon: CompareArrowsOutlinedIcon,
    title: "Wire transfer",
    description:
      "Faça transferências para qualquer país do mundo e receba dólares ou euros via wire transfer de outros bancos no exterior (confira as taxas cobradas na tabela de tarifas).",
  },
  {
    Icon: CreditCardOutlinedIcon,
    title: "Carteira digital",
    description:
      "Você pode cadastrar seu cartão no Apple Pay ou Carteira do Google para pagar por aproximação com seu celular ou smartwatch.",
  },
  {
    Icon: CoffeeOutlinedIcon,
    title: "Mais tranquilidade",
    description:
      "Sua conta internacional com a experiência e o atendimento 24h do seu banco dia a dia.",
  },
];
function About() {
  const [index, setIndex] = useState(0);
  const [transform, setTransform] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  //const sliderRef = useRef(null);

  const updateCardsPerView = () => {
    const width = window.innerWidth;

    if (width >= 1200) {
      setCardsPerView(3);
    } else if (width >= 800) {
      setCardsPerView(2);
    } else if (width >= 768) {
      setCardsPerView(1);
    } else {
      setCardsPerView(1);
    }
  };

  useEffect(() => {
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const slideForward = () => {
    if (index < cards.length - cardsPerView) {
      setIndex(index + 1);
      setTransform((previousTransform) => previousTransform - 390);
    }
  };

  const slideBackward = () => {
    if (index > 0) {
      setIndex(index - 1);
      setTransform((previousTransform) => previousTransform + 390);
    }
  };

  return (
    <div>
      <div className={styles.promoImg}>
        <Image
          src={cover_img}
          alt="C6 promotional card image"
          className={styles.img}
        />
      </div>

      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
        className={styles.container}
      >
        <Grid item xs={12} sm={10} md={8}>
          <Typography variant="h2" gutterBottom className={styles.title} align="left">
            Por que abrir uma C6 Conta Global?
          </Typography>
        </Grid>
        <Grid item xs={12} sm={2} md={2}>
          <IconButton
            aria-label="back_btn"
            className={styles.btn}
            color="primary"
            disabled={index === 0}
            onClick={slideBackward}
          >
            <ArrowBackIcon fontSize="large" />
          </IconButton>
          <IconButton
            aria-label="forward_btn"
            className={styles.btn}
            color="primary"
            disabled={index >= cards.length - cardsPerView}
            onClick={slideForward}
          >
            <ArrowForwardIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>

      {/* Carrossel */}
      <Grid item xs={12}>
        <div className={styles.slider}>
          <div
            className={styles.slideTrack}
            style={{ transform: `translateX(${transform}px)` }}
          >
            {cards.map((card, idx) => (
              <div key={idx} className={idx === 0 ? styles.firstCard : ""}>
                <CardComponent
                  Icon={card.Icon}
                  title={card.title}
                  description={card.description}
                />
              </div>
            ))}
          </div>
        </div>
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
        className={styles.container}
      >
        <Account />
      </Grid>
    </div>
  );
}

export default About;

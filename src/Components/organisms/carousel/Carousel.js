"use client";

import React, { useState, useEffect } from "react";
import { Grid, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CardComponent from "@/Components/molecules/Card/Card";
import styles from "./Carousel.module.css";

function Carousel({ cards }) {
  const [index, setIndex] = useState(0);
  const [transform, setTransform] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

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
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
        className={styles.container}
      >
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
    </div>
  );
}

export default Carousel;

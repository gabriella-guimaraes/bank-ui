"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  Grid,
  Link,
  Grow,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  IconButton,
} from "@mui/material";
import SearchIcon from "../../icons/search";
import menu_icon from "../../../assets/menu-icon.png";
import styles from "./NavBar.module.css";
import Image from "next/image";
import ServiceOptions from "../../atoms/serviceOptions/ServiceOptions";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Logo from "@/Components/atoms/logo/logo";
import NavLink from "@/Components/atoms/navLink/navLink";
import ButtonGroup from "@/Components/molecules/buttonGroup/buttonGroup";

// Estrutura de dados para os links
const serviceData = {
  "Pessoa Física": {
    categories: [
      "Empréstimos e Financiamento",
      "Cartões",
      "Conta",
      "C6 Conta Global",
      "C6 Invest",
      "Pontos e Benefícios",
      "Seguros e Planos",
      "Facilidades",
      "Mais",
    ],
    quickAccess: [
      "Renegociação de dívidas",
      "Cartão de Crédito",
      "C6 Conta Global",
      "C6 Invest",
      "NOVO",
    ],
    securityPortal: ["Quem somos"],
  },
  "PJ e MEI": {
    categories: [
      "Conta",
      "Recebimentos",
      "Crédito",
      "Investimentos",
      "Seguros e Planos",
      "Facilidades e Benefícios",
      "Mais",
    ],
    quickAccess: [
      "Maquininha de cartão - PJ e MEI",
      "Conta PJ",
      "Web Banking  - PJ",
    ],
    securityPortal: [
      "Cartão C6 Business - PJ e MEI",
      "Conta MEI Digital - MEI",
      "Conta C¨GLobal Empresas - PJ"
    ],
  },
};

function NavBar() {
  const [showOptions, setShowOptions] = useState(null);
  const [hoveringOptions, setHoveringOptions] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const handleMouseEnter = (link) => {
    if (serviceData[link]) {
      setShowOptions(link);
    } else {
      setShowOptions(null);
    }
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      if (!hoveringOptions) {
        setShowOptions(null);
      }
    }, 700); // Pequeno atraso para permitir a transição suave
  };

  const handleOptionsMouseEnter = () => {
    setHoveringOptions(true);
  };

  const handleOptionsMouseLeave = () => {
    setHoveringOptions(false);
    setShowOptions(null);
  };

  const toggleMenu = () => setMobile(!mobile);

  const handleDrawerItemClick = (item) => {
    if (serviceData[item]) {
      setSelectedMenuItem(item);
    }
  };

  const handleBackClick = () => {
    setSelectedMenuItem(null);
  };

  const menuItems = [
    "Pessoa Física",
    "PJ e MEI",
    "Experiência C6 Carbon",
    "C6 Conta Global",
    "Ajuda",
    "Blog",
  ];

  const currentMenuItem = menuItems.find(item => item === showOptions);

  return (
    <>
      <nav>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className={styles.container}
        >
          <Grid item xs={4} md={2}>
            <Logo />
          </Grid>

          <Grid item xs={2} md={7} className={styles.links}>
            <div className={mobile ? "" : styles.hideMobileMenu}>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                {menuItems.map((item, index) => (
                  <NavLink
                    key={index}
                    href="#"
                    onMouseEnter={() => handleMouseEnter(item)}
                    onMouseLeave={handleMouseLeave} >
                      {item} 
                  </NavLink>
                ))}
              </Grid>
            </div>
          </Grid>

          <Grid item xs={8} md={3}>
            <Grid container justifyContent="flex-end" alignItems="center">
              <ButtonGroup toggleMenu={toggleMenu} />
            </Grid>
          </Grid>
        </Grid>
      </nav>

      {currentMenuItem && serviceData[currentMenuItem] && (
        <div
          className={styles.optionsContainer}
          onMouseEnter={handleOptionsMouseEnter}
          onMouseLeave={handleOptionsMouseLeave}
        >
          <ServiceOptions
            linkName={currentMenuItem}
            services={serviceData[currentMenuItem]}
            show={showOptions === currentMenuItem}
          />
        </div>
      )}

      <Drawer
        anchor="top"
        open={mobile}
        onClose={toggleMenu}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#0b0e13",
            color: "#E5E9F0",
            top: "19%"
          },
        }}
      >
        {selectedMenuItem ? (
          <Box>
            <IconButton onClick={handleBackClick}>
              <ArrowBackIcon style={{ color: "#E5E9F0" }} />
            </IconButton>
            <ServiceOptions
              linkName={selectedMenuItem}
              services={serviceData[selectedMenuItem]}
              show={true}
            />
          </Box>
        ) : (
          <List className={styles.drawerList}>
            {menuItems.map((item, index) => (
              <ListItem key={index} onClick={() => handleDrawerItemClick(item)}>
                <ListItemText className={styles.drawerLinks} primary={item} />
              </ListItem>
            ))}
          </List>
        )}
      </Drawer>
    </>
  );
}

export default NavBar;

//TODO: concertar o bug de exibição do Services Options (mesmo com o mouse sob o Link, o componente some :( )
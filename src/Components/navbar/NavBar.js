"use client";

import React, { useState } from "react";
import { Button, ButtonGroup, Grid, Link, Grow, Drawer, List, ListItem, ListItemText } from "@mui/material";
import BankIcon from "../icons/logo";
import MobileMenu from "../icons/mobileMenu";
import SearchIcon from "../icons/search";
import menu_icon from "../../assets/menu-icon.png";
import styles from "./NavBar.module.css";
import Image from "next/image";

function NavBar() {
  // Exibe o modal de opções de acordo com o Link
  const [showOptions, setShowOptions] = useState(null);
  const handleMouseEnter = (link) => setShowOptions(link);
  const handleMouseLeave = () => setShowOptions(null);

  // Exibe o menu mobile (tablet e smartphone)
  const [mobile, setMobile] = useState(false);
  const toggleMenu = () => setMobile(!mobile);

  const menuItems = [
    "Pessoa Física",
    "PJ e MEI",
    "Experiência C6 Carbon",
    "C6 Conta Global",
    "Ajuda",
    "Blog",
  ];

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
            <div className={styles.logo}>
              <BankIcon />
            </div>
          </Grid>

          {/* Menu Links */}
          <Grid item xs={2} md={7} className={styles.links}>
            <div className={mobile ? "" : styles.hideMobileMenu}>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    underline="none"
                    href="#"
                    className={styles.menuItem}
                    onMouseEnter={() => handleMouseEnter(item)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item}
                  </Link>
                ))}
              </Grid>
            </div>
          </Grid>

          {/* buttons */}
          <Grid item xs={8} md={3}>
            <Grid container justifyContent="flex-end" alignItems="center">
              <ButtonGroup size="small" aria-label="Small button group">
                <Button variant="outlined" className={styles.searchBtn}>
                  <SearchIcon />
                </Button>
                <Button variant="contained" className={styles.account}>Abrir minha conta</Button>
                <Button
                  variant="text"
                  onClick={toggleMenu}
                  className={styles.menuIcon}
                >
                  {/* <MobileMenu /> */}
                  <Image src={menu_icon} className={styles.menuIcon} alt="mobile menu icon"/>
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Grid>
      </nav>

      {/* Options Divs */}
      <Grow in={showOptions === "Pessoa Física"} timeout={500}>
        <div className={styles.options}>
          <p>Texto para Pessoa Física</p>
        </div>
      </Grow>

      <Grow in={showOptions === "PJ e MEI"} timeout={500}>
        <div className={styles.options}>
          <p>Texto para PJ e MEI</p>
        </div>
      </Grow>

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="top"
        open={mobile}
        onClose={toggleMenu}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#0b0e13",
            color: "#E5E9F0",
            top: "14%"
          },
        }}
      >
        <List className={styles.drawerList}>
          {menuItems.map((item, index) => (
            <ListItem key={index} onClick={toggleMenu}>
              <ListItemText className={styles.drawerLinks} primary={item} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default NavBar;

//TODO: Criar o accordion para as opções Pessoa Física e PJ (mobile)
//TODO: Criar um componente apartando para as opções de Pessoa Física e PJ -> Não esquecer da responsividade!!

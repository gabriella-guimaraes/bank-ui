"use client";

import React, { useState } from "react";
import { Button, ButtonGroup, Grid, Link, Grow, Drawer, List, ListItem, ListItemText, Box, IconButton } from "@mui/material";
import BankIcon from "../icons/logo";
import MobileMenu from "../icons/mobileMenu";
import SearchIcon from "../icons/search";
import menu_icon from "../../assets/menu-icon.png";
import styles from "./NavBar.module.css";
import Image from "next/image";
import ServiceOptions from "../serviceOptions/ServiceOptions";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function NavBar() {
  // Exibe o modal de opções de acordo com o Link
  const [showOptions, setShowOptions] = useState(null);
  const handleMouseEnter = (link) => setShowOptions(link);
  const handleMouseLeave = () => setShowOptions(null);

  // Exibe o menu mobile (tablet e smartphone)
  const [mobile, setMobile] = useState(false);
  const toggleMenu = () => setMobile(!mobile);

  // Controle da renderização de ServiceOptions para mobile de acordo com o item selecionado no Drawer
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const handleDrawerItemClick = (item) => {
    if (typeof item !== "string") {
      setSelectedMenuItem(item);
    }
    // toggleMenu();
  };

  const handleBackClick = () => {
    setSelectedMenuItem(null);
  };

  const menuItems = [
    { name: "Pessoa Física", services: ["Serviço 1", "Serviço 2", "Serviço 3"] },
    { name: "PJ e MEI", services: ["Serviço A", "Serviço B", "Serviço C"] },
    "Experiência C6 Carbon",
    "C6 Conta Global",
    "Ajuda",
    "Blog",
  ];

  //garante com que apenas uma instância de opções de serviço seja exibida de cada vez
  const currentMenuItem = menuItems.find(item => typeof item !== "string" && item.name === showOptions);

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

          <Grid item xs={2} md={7} className={styles.links}>
            <div className={mobile ? "" : styles.hideMobileMenu}>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                {menuItems.map((item, index) => (
                  typeof item === "string" ? (
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
                  ) : (
                    <Link
                      key={index}
                      underline="none"
                      href="#"
                      className={styles.menuItem}
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.name}
                    </Link>
                  )
                ))}
              </Grid>
            </div>
          </Grid>

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
                  <Image src={menu_icon} className={styles.menuIcon} alt="mobile menu icon"/>
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Grid>
      </nav>

      {currentMenuItem && (
        <div className={styles.options}>
          <ServiceOptions
            linkName={currentMenuItem.name}
            services={currentMenuItem.services}
            show={showOptions === currentMenuItem.name}
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
              linkName={selectedMenuItem.name}
              services={selectedMenuItem.services}
              show={true}
            />
          </Box>
        ) : (
          <List className={styles.drawerList}>
            {menuItems.map((item, index) => (
              <ListItem key={index} onClick={() => handleDrawerItemClick(item)}>
                <ListItemText className={styles.drawerLinks} primary={typeof item === "string" ? item : item.name} />
              </ListItem>
            ))}
          </List>
        )}
      </Drawer>
    </>
  );
}

export default NavBar;

//TODO: Criar o accordion para as opções Pessoa Física e PJ (mobile)
//TODO: Criar um componente apartando para as opções de Pessoa Física e PJ -> Não esquecer da responsividade!!

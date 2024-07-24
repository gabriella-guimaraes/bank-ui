import React from 'react';
import { ButtonGroup as MuiButtonGroup } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import NavButton from '@/Components/atoms/navButton/navButton';
import SearchIcon from '@/Components/icons/search';
import Image from 'next/image';
import menu_icon from "@/assets/menu-icon.png";
import styles from "./buttonGroup.module.css"

function ButtonGroup({ toggleMenu }) {
    const isMobile = useMediaQuery('(max-width:1024px)');

  return (
    <MuiButtonGroup size="small" aria-label="Small button group">
        {!isMobile && (
            <NavButton variant="outlined" >
                <SearchIcon  />
            </NavButton>
        )}
        <NavButton variant="contained">Abrir minha conta</NavButton>
        {isMobile && (
            <NavButton variant="text" onClick={toggleMenu}>
                <Image src={menu_icon} className={styles.menuIcon} alt="mobile menu icon" />
            </NavButton>
        )}
    </MuiButtonGroup>
  )
}

export default ButtonGroup;
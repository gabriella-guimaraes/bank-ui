import { Button, ButtonGroup, Grid, Link } from "@mui/material"
import BankIcon from "../icons/logo";
import SearchIcon from "../icons/search";
import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <Grid container direction="row" justifyContent="space-between" alignItems="center" className={styles.container}>
        <Grid item xs={4} md={2}>
          <div className={styles.logo}>
            <BankIcon />
          </div>
        </Grid>

        <Grid item xs={12} md={7}>
          <div className={styles.links}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Link underline="none" href="#" className={styles.menuItem}>Pessoa Física</Link>
              <Link underline="none" href="#" className={styles.menuItem}>PJ e MEI</Link>
              <Link underline="none" href="#" className={styles.menuItem}>Experiência C6 Carbon</Link>
              <Link underline="none" href="#" className={styles.menuItem}>C6 Conta Global</Link>
              <Link underline="none" href="#" className={styles.menuItem}>Ajuda</Link>
              <Link underline="none" href="#" className={styles.menuItem}>Blog</Link>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={12} md={2}>
          <div className="buttons">
            <ButtonGroup size="small" aria-label="Small button group">
              <Button variant="outlined">
                <SearchIcon />
              </Button>
              <Button variant="contained">Abrir minha conta</Button>
            </ButtonGroup>
          </div>
        </Grid>
      </Grid>
    </header>
    
  )
}

export default Header
import styles from "./Footer.module.css";
import { Button, Grid, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import Icon from "@mui/material";
import AppleStore from "../icons/appleStore";
import PlayStore from "../icons/playStore";
import TikTok from "../icons/tiktok.js";

const links = [
  {
    id: 1,
    title: "SITEMAP",
    items: [
      {
        id: 1,
        name: "Produtos",
        link: "#",
      },
      {
        id: 2,
        name: "Conexão C6",
        link: "#",
      },
      {
        id: 3,
        name: "Sustentabilidade",
        link: "#",
      },
      {
        id: 4,
        name: "Ver tudo",
        link: "#",
      },
    ],
  },
  {
    id: 2,
    title: "DÚVIDAS",
    items: [
      {
        id: 1,
        name: "Tire suas dúvidas",
        link: "#",
      },
      {
        id: 2,
        name: "Canal de Transparência",
        link: "#",
      },
      {
        id: 3,
        name: "Documentos",
        link: "#",
      },
      {
        id: 4,
        name: "LGPD",
        link: "#",
      },
      {
        id: 5,
        name: "CTVM LGPD",
        link: "#",
      },
      {
        id: 6,
        name: "C6Seg LGPD",
        link: "#",
      },
    ],
  },
  {
    id: 3,
    title: "C6 BANK",
    items: [
      {
        id: 1,
        name: "Benefícios JP Morgan Chase",
        link: "#",
      },
      {
        id: 2,
        name: "Blog",
        link: "#",
      },
      {
        id: 3,
        name: "Trabalhe Conosco",
        link: "#",
      },
      {
        id: 4,
        name: "Sala de Imprensa",
        link: "#",
      },
    ],
  },
];

function Footer() {
  return (
    <footer>
      <div className={styles.container}>
      <Grid
          container
          spacing={3}
          justifyContent="space-between"
          className={styles.links}
        >
          {links.map((link) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={link.id}
              className={styles.content}
            >
              <Typography
                variant="body1"
                align="left"
                gutterBottom
                sx={{ color: `var(--primary)`, marginBottom: 2 }}
              >
                {link.title}
              </Typography>
              {link.items.map((item) => (
                <Typography
                  key={item.id}
                  variant="body1"
                  align="left"
                  gutterBottom
                >
                  {item.name}
                </Typography>
              ))}
            </Grid>
          ))}
          <Grid item xs={12} sm={6} md={3} alignItems="center" className={styles.buttons}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12} className={styles.btnWrapper}>
                <Button variant="outlined" className={styles.btn}>
                  <PlayStore />
                </Button>
              </Grid>
              <Grid item xs={12} className={styles.btnWrapper}>
                <Button variant="outlined" className={styles.btn}>
                  <AppleStore />
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={12} className={styles.iconsWrapper}>
              <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                className={styles.icons}
              >
                <Grid item xs={3} className={styles.icon}>
                  <InstagramIcon />
                </Grid>
                <Grid item xs={3} className={styles.icon}>
                  <TikTok />
                </Grid>
                <Grid item xs={3} className={styles.icon}>
                  <YouTubeIcon />
                </Grid>
                <Grid item xs={3} className={styles.icon}>
                  <XIcon />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
}

export default Footer;

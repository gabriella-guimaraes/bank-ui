import styles from "./Footer.module.css";
import { Grid } from "@mui/material";
import Links from "@/Components/molecules/Links/Links";
import StoresGroup from "@/Components/molecules/StoresGroup/StoresGroup";
import SocialMediaGroup from "@/Components/molecules/SocialMediaGroup/SocialMediaGroup";

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
        {/* Links */}
      <Grid
          container
          spacing={3}
          justifyContent="space-between"
          className={styles.links}
        >
          <Links links={links} />

          <Grid item xs={12} sm={6} md={3} alignItems="center" className={styles.buttons}>
            <StoresGroup />
            <SocialMediaGroup />
            
          </Grid>
        </Grid>
      </div>
    </footer>
  );
}

export default Footer;

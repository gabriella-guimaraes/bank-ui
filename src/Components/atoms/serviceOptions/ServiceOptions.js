import React from "react";
import { Grow, Grid, Typography } from "@mui/material";
import styles from "./ServiceOptions.module.css";

function ServiceOptions({ linkName, services, show }) {
  return (
    <>
      <Grow in={show} timeout={500}>
        <div className={styles.options}>
          <Typography variant="h6" className={styles.title}>{linkName}</Typography>
          {services ? (
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Typography variant="subtitle1" className={styles.subtitle}>CATEGORIAS</Typography>
                <ul>
                  {services.categories.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="subtitle1" className={styles.subtitle}>ACESSO RÁPIDO</Typography>
                <ul>
                  {services.quickAccess.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="subtitle1" className={styles.subtitle}>PORTAL DE SEGURANÇA</Typography>
                <ul>
                  {services.securityPortal.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </Grid>
            </Grid>
          ) : (
            <Typography variant="body1">
              Nenhuma informação disponível.
            </Typography>
          )}
        </div>
      </Grow>
    </>
  );
}

export default ServiceOptions;

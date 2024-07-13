import styles from "./Comments.module.css";
import boat from "../../assets/boat.png";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import Image from "next/image";
import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";

const userComments = [
  {
    id: 1,
    user: "@jaaihx",
    comment:
      "Usamos a conta de euro para viajar para a Europa e foi simplesmente uma das nossas melhores escolhas!",
  },
  {
    id: 2,
    user: "@natifhferreira",
    comment:
      "É tudo de bom mesmo! Usamos na lua de mel pela Europa mês passado e deu super certo!",
  },
  {
    id: 3,
    user: "@nanda_2611",
    comment:
      "Usei a Conta Global para a minha última viagem para Portugal e foi muito bom!",
  },
];
function Comments() {
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <Image
          src={boat}
          alt="A boat on the sea with a C6 carbon card."
          className={styles.img}
        />
      </div>

      <Grid
        container
        direction="column"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item xs={12} sm={12} md={12}>
          <Typography
            variant="h2"
            gutterBottom
            align="center"
            className={styles.title}
          >
            O que estão falando sobre a C6 Conta Global
          </Typography>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          className={styles.cards}
        >
          {/* Fazer um map da função comments e aplicar no card */}
          {userComments.map((comment) => (
            
              <Grid item xs={12} sm={4} md={4} key={comment.id}>
                <Card
                  sx={{
                    minWidth: 235,
                    maxWidth: 400,
                    backgroundColor: "#0C0F14",
                  }}
                >
                  <CardContent>
                    <Grid
                      container
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Grid item xs={2} sm={2} md={2} className={styles.icon}>
                        <PersonIcon fontSize="large" />
                      </Grid>
                      <Grid
                        item
                        xs={10}
                        sm={10}
                        md={10}
                        className={styles.stars}
                      >
                        <StarIcon fontSize="small" />
                        <StarIcon fontSize="small" />
                        <StarIcon fontSize="small" />
                        <StarIcon fontSize="small" />
                        <StarIcon fontSize="small" />

                        <Typography
                          variant="subtitle2"
                          gutterBottom
                          className={styles.userName}
                        >
                          {comment.user}
                        </Typography>
                      </Grid>

                      <Grid item xs={12} sm={12} md={12}>
                        <Typography
                          variant="body1"
                          className={styles.desc}
                        >
                          {comment.comment}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            
          ))}
          {/* <Grid item xs={12} sm={4} md={4}>
            <Card sx={{ minWidth: 235, maxWidth: 370, backgroundColor: "#0C0F14" }}>
            <CardContent>
              <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              >
              <Grid item xs={2} sm={2} md={2} className={styles.icon}>
                <PersonIcon fontSize="large" />
              </Grid>
              <Grid item xs={5} sm={5} md={5} className={styles.stars}>
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />

                <Typography variant="subtitle2" gutterBottom className={styles.userName}>
                  @user_nome
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12} md={12}>
                <Typography variant="body1" align="justify" className={styles.desc}>
                User comment goes here
                </Typography>
              </Grid>

                </Grid>
              </CardContent>
          </Card>
          </Grid> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default Comments;

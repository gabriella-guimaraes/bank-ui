import styles from "./Comments.module.css";
import boat from "../../../assets/boat.png";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import Image from "next/image";
import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";
import Comment from "@/Components/organisms/comment/Comment";
import Title from "@/Components/atoms/title/title";

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
          <Title text="O que estão falando sobre a C6 Conta Global" align="center" />
        </Grid>

        <Comment comments={userComments} />
      </Grid>
    </div>
  );
}

export default Comments;

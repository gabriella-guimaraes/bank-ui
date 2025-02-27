import Image from "next/image";
import Hero from "@/Components/templates/hero/Hero";
import About from "@/Components/templates/About/About";
import styles from "./page.module.css";
import Benefits from "@/Components/templates/Benefits/Benefits";
import Comments from "@/Components/templates/Comments/Comments";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Benefits />
      <Comments />
    </main>
  );
}

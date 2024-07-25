import Image from "next/image";
import Hero from "@/Components/templates/hero/Hero";
import About from "@/Components/templates/About/About";
import styles from "./page.module.css";
import Benefits from "@/Components/Benefits/Benefits";
import Comments from "@/Components/Comments/Comments";
import Footer from "@/Components/Footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Benefits />
      <Comments />
      <Footer />
    </main>
  );
}

import Image from "next/image";
import Hero from "@/Components/hero/Hero";
import About from "@/Components/About/About";
import styles from "./page.module.css";
import Benefits from "@/Components/Benefits/Benefits";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Benefits />
    </main>
  );
}

import Image from "next/image";
import Hero from "@/Components/hero/Hero";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
    </main>
  );
}

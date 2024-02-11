import Image from "next/image";
import styles from "./page.module.scss";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home</h1>
      <Footer />
    </main>
  );
}


import Image from "next/image";
import styles from "./page.module.css";
import Header from "./ComponentPages/Header.js";
import Head from "next/head";

export default function Home() {
  return (
      <>
        <Head>
        <style>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap');
</style>
        </Head>
        <Header />
        <main>
          <h1>TESTing</h1>
        </main>
      </>
  );
}

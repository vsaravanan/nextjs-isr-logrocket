import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js ISR Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my demo!</h1>

        <div className={styles.grid}>
          <Link href="/isr" className={styles.card}>
            <h3>ISR &rarr;</h3>
            <p>Fetches a random public API every revalidation period</p>
          </Link>

          <Link href="/ssg" className={styles.card}>
            <h3>SSG &rarr;</h3>
            <p>Fetches a random public API at build time</p>
          </Link>

          <Link href="/ssr" className={styles.card}>
            <h3>SSR &rarr;</h3>
            <p>Fetches a random public API on every request</p>
          </Link>
        </div>
      </main>
    </div>
  );
}

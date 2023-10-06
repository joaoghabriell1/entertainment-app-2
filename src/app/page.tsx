import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>MovieDB API</h1>
      </div>
      <section>Welcome to your movie app.</section>
    </main>
  );
}

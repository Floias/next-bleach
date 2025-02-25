import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/bleach-logo.svg"
          alt="bleach logo"
          width={520}
          height={130}
          priority
        />
      </main>
    </div>
  );
}

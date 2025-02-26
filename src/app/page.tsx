import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.page__background}
          src="/images/background/main.jpg"
          alt=""
          width={720}
          height={1280}
          priority
        />
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

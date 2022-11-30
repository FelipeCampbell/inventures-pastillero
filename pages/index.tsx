import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Inventures P1</title>
      </Head>

      <main className={styles.main}>
        <nav className={styles.navbar}>
          <Image
            src="/icons/menu-icon.svg"
            className={styles["menu-icon"]}
            width={17}
            height={17}
            alt="menu-icon<"
          />
          <h1 className={styles["navbar-title"]}>Mi pastillero</h1>
          <Image
            src="/icons/search.svg"
            className={styles["search-icon"]}
            width={17}
            height={17}
            alt="search-icon<"
          />
          <Image
            src="/icons/white-cart.svg"
            width={17}
            height={17}
            alt="cart-icon<"
          />
        </nav>

      </main>
    </div>
  );
}

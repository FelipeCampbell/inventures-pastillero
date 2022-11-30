import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";
import { useQuery } from "@tanstack/react-query";
import { ResponseData } from "../utils/types";
import randomIntFromInterval from "../utils/functions/randomIntFromInterval";

export default function Home() {
  const fetchProducts = async () => {
    const getProducts = await fetch(
      "https://private-anon-5f1ad0b24d-inventurestest.apiary-mock.com/products"
    );
    const data = (await getProducts.json()) as ResponseData;
    return data;
  };
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

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
        <div className={styles.container}>
          <div className={styles.banner}>
            <Image
              src="/icons/pill.png"
              width={40}
              height={40}
              alt="pill-icon<"
            />
            <h1>Revisa tus compras</h1>
            <h2>Agrega al carro si necesitas reponer</h2>
          </div>
          <div className={styles["products-section-container"]}>
            <h1>Te queda</h1>
            {isLoading && <div> Cargando... </div>}
            <div className={styles["products-container"]}>
              {data?.payload?.map((product) => (
                <div className={styles["product-card"]} key={product.id}>
                  <img
                    height={62}
                    width={62}
                    className={styles["product-img"]}
                    src={product.imagesUrl}
                    alt="product-img"
                  />
                  <div className={styles["product-info"]}>
                    <p className={styles["product-title"]}>{product.name}</p>
                    <p className={styles["product-concentration"]}>
                      {product.concentration}
                    </p>
                    <p className={styles["product-amount-left"]}>
                      Quedan {randomIntFromInterval(1, 30)} comprimidos
                    </p>
                    <p className={styles["product-time-left"]}>
                      Para {randomIntFromInterval(1, 30)} días
                    </p>
                  </div>
                  <div className={styles["card-action"]}>
                    <Image
                      className={styles["add-circle"]}
                      src="/icons/add-circle.svg"
                      width={17}
                      height={17}
                      alt="add-circle"
                    />
                    <Image
                      src="/icons/grey-cart.svg"
                      width={17}
                      height={17}
                      alt="cart-icon"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

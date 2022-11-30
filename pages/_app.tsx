import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";
import { useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";



const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
        <main className={poppins.className}>
          <Component {...pageProps} />
        </main>
    </QueryClientProvider>
  );
}

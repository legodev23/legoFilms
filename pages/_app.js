import Head from "next/head";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>legoFilms</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

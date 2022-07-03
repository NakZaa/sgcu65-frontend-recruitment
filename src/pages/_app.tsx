import "styles/tailwind.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>SGCU</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

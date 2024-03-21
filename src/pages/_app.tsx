import "../styles/bootstrap.min.css";
import "../styles/util.css";
import "../styles/main.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Script from "next/script";
import { HeaderContextProvider } from "../context/HeaderContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://kit.fontawesome.com/a71c664b5b.js"
        crossOrigin="anonymous"
      ></Script>
      <HeaderContextProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </HeaderContextProvider>
    </>
  );
}

export default MyApp;

import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import {SiteLayout} from "../components/site-layout";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Fix-Link Consult</title>
      </Head>
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </>
  );
}

export default CustomApp;

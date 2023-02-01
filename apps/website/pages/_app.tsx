import { AppProps } from 'next/app';
import 'antd/dist/reset.css';
import Head from 'next/head';
import './styles.css';
import { SiteLayout } from '../components/site-layout';
import { ConfigProvider } from 'antd';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Fix-Link Consult</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#1d3b8a',
          },

        }}
      >
        <SiteLayout>
          <div>
            <Component {...pageProps} />
          </div>
        </SiteLayout>
      </ConfigProvider>
    </>
  );
}

export default CustomApp;

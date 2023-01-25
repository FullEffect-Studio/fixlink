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
      </Head>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#1d3b8a',
          },

        }}
      >
        <SiteLayout>
          <div className="z-10x">
            <Component {...pageProps} />
          </div>
        </SiteLayout>
      </ConfigProvider>
    </>
  );
}

export default CustomApp;

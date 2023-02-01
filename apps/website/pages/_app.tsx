import { AppProps } from 'next/app';
import 'antd/dist/reset.css';
import Head from 'next/head';
import './styles.css';
import { SiteLayout } from '../components/site-layout';
import { ConfigProvider } from 'antd';


function SchemaMarkup({data}) {
    return (
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(data)}}/>
    )
}

function CustomApp({ Component, pageProps }: AppProps) {
  const schema = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "name": "Fix-Link Consult",
    "image": "https://fixlink.web.app/logo.png",
    "url": "https://fixlink.web.app/",
    "telephone": "+1-123-456-7890",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main St",
      "addressLocality": "Anytown",
      "addressRegion": "CA",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "13:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/example",
      "https://www.twitter.com/example",
      "https://www.linkedin.com/company/example"
    ]
  }
  return (
    <>
      <Head>
        <title>Fix-Link Consult</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Fix-Link Consult offers a wide range of services to help you achieve your goals, whether you're looking to study abroad, plan an event, capture memories through photography and video, own a car, or grow your business."
        />
        <meta name="keywords" content="fixlink, consultancy, Ghana consultancy firms, Consulting business, Ghana, Study abroad, Birth cert, Birth certificate, VISA, visa application, passport, Ghana passport, Ghanaian passport, application, graphic design, printing, large format printing, photograhy, video coverage, event planning, real estate, legal documents, general business, business consultation, Ghana, business, best, top, companies, fulleffect, clients, " />
        <meta property="og:title" content="Fix-Link Consult" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fixlink.web.app" />
        <meta
          property="og:description"
          content="Fix-Link Consult offers a wide range of services to help you achieve your goals, whether you're looking to study abroad, plan an event, capture memories through photography and video, own a car, or grow your business."
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <SchemaMarkup data={schema}/>

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

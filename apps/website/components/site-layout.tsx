import { Footer } from './footer';
import { Navbar } from './navbar';

export function SiteLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

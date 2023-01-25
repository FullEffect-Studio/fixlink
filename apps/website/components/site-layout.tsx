import { Footer } from './footer';
import { Navbar } from './navbar';

export function SiteLayout({ children }) {
  return (
    <>
      <div className="overflow-x-clip">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}

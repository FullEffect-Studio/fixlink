import Image from 'next/image';
import logo from '../public/images/logo.png';
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
} from 'react-icons/fi';
import Link from 'next/link';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="z-10">
        <div className="bg-neutral ">
          <footer className="container mx-auto footer grid grid-cols-4 lg:grid-cols-6 items-center px-4  pb-8 pt-16 bg-neutral text-neutral-content">

              <div className="col-span-4 lg:col-span-2">
                <div className="">
                  <div>
                    <div className="uppercase footer-title lg:text-white font-bold">
                      Fix-Link Consult
                    </div>
                    <div className="flex items-start">
                      <Image
                        className="mr-2 hidden lg:mr-4"
                        src={logo}
                        priority
                        width={60}
                        height={60}
                        alt="Fix-Link Consult Logo"
                      />
                      <div>
                      <span className="lg:hidden">
                        We help you to study abroad, plan an event, photography
                        and video coverage, own a car, or grow your business.
                      </span>
                        <span className="hidden lg:block">
                        We offer a wide range of services to help you achieve
                        your goals, whether you&apos;re looking to study abroad,
                        plan an event, capture memories through photography and
                        video, own a car, or grow your business.
                      </span>
                        <div className="text-white flex items-center">
                          <div>Follow us:</div>
                          <div className="hover:bg-primary px-3 py-3">
                            <FiFacebook className="text-accent text-md" />
                          </div>

                          <div className="hover:bg-primary px-3 py-3">
                            <FiInstagram className="text-accent" />
                          </div>

                          <div className="hover:bg-primary px-3 py-3">
                            <FiLinkedin className="text-accent" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="col-span-2 lg:col-span-1">
                <span className="footer-title">Quick Links</span>
                <Link href="/" className="link link-hover">
                  Homepage
                </Link>
                <Link href="/about" className="link link-hover">
                  About us
                </Link>
                <Link href="/contact" className="link link-hover">
                  Contact
                </Link>
                <Link href="/services/study-abroad" className="link link-hover">
                  Study Abroad
                </Link>
              </div>


              <div className="col-span-2 lg:col-span-1 md:hidden lg:grid">
                <span className="footer-title">Other Services</span>
                <Link href="/services/photography" className="link link-hover">
                  Photography & Video
                </Link>
                <Link href="/services/design" className="link link-hover">
                  Design & Printing
                </Link>
                <Link href="/services/consulting" className="link link-hover">
                  General Consulting
                </Link>
                <Link href="/services/real-estate" className="link link-hover">
                  Work & Pay
                </Link>
              </div>

              <div className="col-span-4 lg:col-span-2">
                <span className="footer-title">Address</span>
                <div className="flex items-center">
                  {' '}
                  <FiMail className="text-accent text-md mr-2" />{' '}
                  <div>info@fixlinkconsultgh.com</div>
                </div>
                <div className="flex items-center">
                  {' '}
                  <FiPhone className="text-accent text-md mr-2" />{' '}
                  <div>+233(0)501064110 / 0302549659</div>
                </div>
                <div className="flex items-center">
                  {' '}
                  <FiMapPin className="text-accent text-md mr-2" />{' '}
                  <div>8 Lettuce Street, GM-062-5091, Adenta Pentecost Road</div>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </footer>
        </div>
        <div className="bg-gray-500">
          <div className="container mx-auto flex justify-center py-4">
            <div className="text-white text-sm">
              Fix-Link Consult Limited © {year}. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

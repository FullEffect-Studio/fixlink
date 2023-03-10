import {FiFacebook, FiInstagram, FiLinkedin, FiMail, FiPhone} from 'react-icons/fi';
import Image from "next/image";
import logo from "../public/images/logo.png"
import Link from 'next/link';

export function Navbar() {
  return (
    <>
      <div className="bg-primary">
        <div className="container mx-auto md:px-8 flex justify-center md:justify-between space-x-6">
          <div className="hidden md:flex flex-1 space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-200">
              <FiMail className="text-accent" />
              <div>info@fixlinkgh.com</div>
            </div>

            <div className="flex items-center space-x-2 text-sm text-gray-200">
              <FiPhone className="text-accent" />
              <div>0501064110 / 0302549659</div>
            </div>
          </div>
          <div className="flex">
            <div className="hover:bg-accent px-3 py-3">
              <FiFacebook className="text-white text-md" />
            </div>

            <div className="hover:bg-accent px-3 py-3">
              <FiInstagram className="text-white" />
            </div>

            <div className="hover:bg-accent px-3 py-3">
              <FiLinkedin className="text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white drop-shadow-2xl">
        <div className="navbar h-24 items-center container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact z-50 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li tabIndex={0}>
                  <a className="justify-between">
                    Services
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                  </a>
                  <ul className="p-2 bg-white shadow-lg">
                    <li><Link href="/services/study-abroad">Study Abroad</Link></li>
                    <li><Link href="/services/photography">Photography & Video Coverage</Link></li>
                    <li><Link href="/services/design">Graphic Design & Printing Press</Link></li>
                    <li><Link href="/services/real-estate">PEF Real Estate</Link></li>
                    <li><Link href="/services/legal_documents">Legal Documents</Link></li>
                    <li><Link href="/services/consulting">General Consulting</Link></li>
                  </ul>
                </li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </div>
            <Link className="bg-transparent flex items-center space-x-4 text-xl cursor-pointer" href="/">
              <Image src="/images/logo.png" priority width={80} height={80} alt="Fix-Link Consult Logo"/>
              <div className="uppercase text-primary text-xl font-bold">Fix-Link Consult</div>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><Link href="/" className="text-primary">Home</Link></li>
              <li><Link href="/about" as="/about-us" className="text-primary">About Us</Link></li>
              <li className="z-50" tabIndex={0}>
                <a className="text-primary">
                  Services
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                </a>
                <ul className="p-2 z-50 bg-white shadow-lg">
                  <li><Link href="/services/study-abroad">Study Abroad</Link></li>
                  <li><Link href="/services/photography">Photography & Video Coverage</Link></li>
                  <li><Link href="/services/design">Graphic Design & Printing Press</Link></li>
                  <li><Link href="/services/real-estate">PEF Real Estate</Link></li>
                  <li><Link href="/services/legal_documents">Legal Documents</Link></li>
                  <li><Link href="/services/consulting">General Consulting</Link></li>
                </ul>
              </li>
              <li><Link href="/contact" className="text-primary">Contact Us</Link></li>
            </ul>
          </div>
          <div className="navbar-end hidden lg:flex">
            <a className="btn btn-neutral">Make an Enquiry</a>
          </div>
        </div>
      </div>
    </>
  );
}

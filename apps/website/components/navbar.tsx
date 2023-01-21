import {FiFacebook, FiInstagram, FiLinkedin, FiMail, FiPhone} from 'react-icons/fi';
import Image from "next/image";
import logo from "../public/images/logo.png"

export function Navbar() {
  return (
    <>
      <div className="bg-blue-900">
        <div className="container mx-auto md:px-8 flex justify-center md:justify-between space-x-6">
          <div className="hidden md:flex flex-1 space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-200">
              <FiMail className="text-accent" />
              <div>info@fixlinkconsultgh.com</div>
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

      <div className="bg-white shadow-lg">
        <div className="navbar h-24 items-center container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li tabIndex={0}>
                  <a className="justify-between">
                    Parent
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                  </a>
                  <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </li>
                <li><a>Item 3</a></li>
              </ul>
            </div>
            <div className="bg-transparent flex items-center space-x-4 text-xl cursor-pointer">
              <Image src={logo} priority width={70} height={70} alt="Fix-Link Consult Logo"/>
              <div className="uppercase text-blue-900 text-xl font-bold">Fix-Link Consult</div>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a>Home</a></li>
              <li><a>About Us</a></li>
              <li tabIndex={0}>
                <a>
                  Services
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                </a>
                <ul className="p-2 bg-white shadow-lg">
                  <li><a>Study Abroad</a></li>
                  <li><a>Photography & Video Coverage</a></li>
                  <li><a>Graphic Design & Printing Press</a></li>
                  <li><a>Work & Pay Cars</a></li>
                  <li><a>General Consulting</a></li>
                </ul>
              </li>
              <li><a>Contact Us</a></li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Make an Enquiry</a>
          </div>
        </div>
      </div>
    </>
  );
}

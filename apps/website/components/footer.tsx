import Image from "next/image";
import logo from "../public/images/logo.png"
import {FiFacebook, FiInstagram, FiLinkedin, FiMail, FiMapPin, FiPhone} from "react-icons/fi";

export function Footer() {
  return <>
  <div className="bg-neutral">
    <div className="container mx-auto">
      <footer className="footer grid grid-cols-4 lg:grid-cols-6 items-center px-12 py-8 bg-neutral text-neutral-content">
        <div className="col-span-4 lg:col-span-2">
          <div className="">
            <div>
              <div className="uppercase footer-title lg:text-white font-bold">Fix-Link Consult</div>
              <div className="flex items-start">
                <Image className="mr-2 lg:mr-4" src={logo} priority width={70} height={70} alt="Fix-Link Consult Logo"/>
                <div>
                  <span className="lg:hidden">We help you to study abroad, plan an event, photography and video coverage, own a car, or grow your business.</span>
                  <span className="hidden lg:block">We offer a wide range of services to help you achieve your goals, whether you're looking to study abroad, plan an event, capture memories through photography and video, own a car, or grow your business.</span>
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
          <a className="link link-hover">Homepage</a>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Study Abroad</a>

        </div>
        <div className="col-span-2 lg:col-span-1 md:hidden lg:grid">
          <span className="footer-title">Other Services</span>
          <a className="link link-hover">Photography & Video</a>
          <a className="link link-hover">Design & Printing</a>
          <a className="link link-hover">General Consulting</a>
          <a className="link link-hover">Work & Pay</a>
        </div>
        <div className="col-span-4 lg:col-span-2">
          <span className="footer-title">Address</span>
          <div className="flex items-center"> <FiMail className="text-accent text-md mr-2" /> <div>info@fixlinkconsultgh.com</div></div>
          <div className="flex items-center"> <FiPhone className="text-accent text-md mr-2" /> <div>+233(0)501064110 / 0302549659</div></div>
          <div className="flex items-center"> <FiMapPin className="text-accent text-md mr-2" /> <div>Adjacent Pentecost, Adenta - Accra, Ghana</div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>

        </div>
      </footer>
    </div>
  </div>
  </>
}

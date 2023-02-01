import { Carousel } from 'antd';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { RiCustomerService2Line } from 'react-icons/ri';
import {MdOutlineHighQuality, MdSpeed} from "react-icons/md";
import {ImHappy} from "react-icons/im";


export function Index() {
  return (
    <main>
      <Carousel
        className="-z-30"
        dotPosition="right"
        autoplay
        autoplaySpeed={5000}
      >
        <div className="bg-cover bg-gray-300 slide1 h-120 lg:h-100">
          <div className="container mx-auto py-16 px-4 lg:px-16">
            <div className="bg-primary p-8 lg:w-2/5 bg-opacity-75 rounded-lg">
              <div className="uppercase text-accent text-lg mb-2">
                Educational Consultants
              </div>
              <div className="text-white text-2xl">
                Start planning your future
              </div>
              <div className="text-4xl text-white font-black uppercase my-4 drop-shadow">
                study in abroad
              </div>

              <div className="text-white mt-2">
                At Fix-Link Consult Ltd, we believe that foreign education is
                not an expense but an investment where the return comes over a
                lifetime.
              </div>

              <div className="mt-4 space-x-4">
                <button className="btn btn-accent btn-md">Apply Now</button>
                <button className="btn btn-info btn-md">View Schools</button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-cover bg-right-top bg-gray-300 slide2 h-120 lg:h-100">
          <div className="container mx-auto py-16 px-4 lg:px-10">
            <div className="bg-gray-800 p-8 lg:w-2/5 bg-opacity-75 rounded-lg">
              <div className="uppercase text-accent text-lg mb-2">
                Special Events Coverage
              </div>
              <div className="text-white text-2xl">
                Using State-of-the-art equipment and techniques for your
              </div>
              <div className="text-4xl text-orange-400 font-black uppercase drop-shadow my-4">
                Photography and Video Coverage
              </div>

              <div className="text-white mt-2">
                We ensure that your memories are captured in the best possible
                way.
              </div>

              <div className="mt-4 hidden space-x-4">
                {/*<button className="btn btn-accent btn-md">Apply Now</button>*/}
                <button className="btn btn-info btn-md">Contact Us</button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-cover bg-top bg-gray-300 slide3 h-120 lg:h-100">
          <div className="container mx-auto py-16 px-4 lg:px-10">
            <div className="bg-yellow-300 p-8 lg:w-2/5 bg-opacity-75 rounded-lg">
              <div className="uppercase text-neutral text-lg"></div>
              <div className="text-neutral text-2xl">
                Get High Quality and modern looking{' '}
              </div>
              <div className="text-4xl text-primary font-black uppercase drop-shadow my-4">
                Graphics design and print jobs at cool prices
              </div>

              <div className="text-neutral mt-2">
                We ensure that your memories are captured in the best possible
                way.
              </div>

              <div className="mt-4 space-x-4">
                {/*<button className="btn btn-accent btn-md">Apply Now</button>*/}
                <button className="btn btn-info btn-md">Contact Us</button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-cover bg-top bg-gray-300 slide4 h-120 lg:h-100">
          <div className="container mx-auto py-16 px-4 lg:px-10 ">
            <div className="bg-green-800 p-8 lg:w-2/5 bg-opacity-75x rounded-lg">
              <div className="uppercase text-accent text-lg"></div>
              <div className="text-white text-2xl">
                Tackling projects of any size
              </div>
              <div className="text-4xl text-white font-black uppercase drop-shadow my-4">
                <span className="text-orange-500">Professional</span> Real
                Estate Developers
              </div>

              <div className="text-white mt-2">
                From design and construction to the importation of building
                materials and the selling and renting of properties, we&apos;ve
                got you covered.
              </div>

              <div className="mt-4 space-x-4">
                {/*<button className="btn btn-accent btn-md">Apply Now</button>*/}
                <button className="btn btn-info btn-md">Contact Us</button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-cover bg-right-top bg-gray-300 slide5 h-120 lg:h-100">
          <div className="container mx-auto py-16 px-4 lg:px-10">
            <div className="bg-gray-800 p-8 lg:w-2/5 bg-opacity-75 rounded-lg">
              <div className="uppercase text-accent text-lg mb-2">
                achieve your business goals
              </div>
              <div className="text-white text-2xl">
                Help your business reach its full potential through our
              </div>
              <div className="text-4xl text-orange-400 font-black uppercase drop-shadow my-4">
                General Business Consultancy
              </div>

              <div className="text-white mt-2">
                We understand that running a business can be challenging, which
                is why we offer a wide range of services to help you navigate
                the complexities of the business world.
              </div>

              <div className="mt-4 hidden space-x-4">
                {/*<button className="btn btn-accent btn-md">Apply Now</button>*/}
                <button className="btn btn-info btn-md">Contact Us</button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-cover bg-gray-300 slide6 h-120 lg:h-100">
          <div className="container mx-auto py-16 px-4 lg:px-16">
            <div className="bg-red-700 p-8 lg:w-6/12 bg-opacity-75 rounded-lg">
              <div className="uppercase text-accent text-lg mb-2">
                We get it done faster and cheaper.
              </div>
              <div className="text-white text-2xl">
                Legal documents including:
              </div>
              <div className="text-4xl text-white font-black uppercase my-4 drop-shadow">
                Business Registration, Birth Certs & Passport
              </div>

              <div className="text-white mt-2">
                Our agency leads and handles your legal documentation issues. We
                make sure you get it on time.
              </div>

              <div className="mt-4  space-x-4">
                {/*<button className="btn btn-accent btn-md">Apply Now</button>*/}
                <button className="btn btn-info btn-md">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
      <div className=" py-16 bg-gray-900">
        <div className="container mx-auto grid grid-cols-3 gap-x-8 gap-y-16 ">
          <div className="col-span-3 lg:col-span-1 flex flex-col items-center">
            <MdOutlineHighQuality className="text-accent text-5xl mb-4"/>
            <div className="text-2xl font-semibold text-white">Quality</div>
            <div className="text-gray-400">
              Providing top-notch services to clients
            </div>
          </div>

          <div className="col-span-3 lg:col-span-1 flex flex-col items-center">
            <ImHappy className="text-accent text-5xl mb-4"/>
            <div className="text-2xl font-semibold text-white">Customer Satisfaction</div>
            <div className="text-gray-400">
              Ensuring clients are happy with the services provided
            </div>
          </div>

          <div className="col-span-3 lg:col-span-1 flex flex-col items-center">
            <MdSpeed className="text-accent text-5xl mb-4"/>
            <div className="text-2xl font-semibold text-white">Faster Delivery</div>
            <div className="text-gray-400">
              Our skilled experts gets the job done faster and better
            </div>
          </div>
        </div>
      </div>

      <div className=" py-16">
        <div className="container mx-auto">
          <div className="badge badge-primary bg-opacity-10 badge-lg text-accent">
            About Us
          </div>
          <div className="text-3xl font-bold my-4">Our Services</div>
        </div>

      </div>

      <div className="container mx-auto hidden py-16">
        <div className="badge badge-primary bg-opacity-10 badge-lg text-accent">
          Core Services
        </div>
        <div className="text-3xl font-bold my-4">Our Services</div>
      </div>

      <div className="px-16 relative z-40 my-16">
        <div
          className="bg-accent rounded-2xl py-12"
          style={{ backgroundImage: `url("/images/shape-100.png")` }}
        >
          <div className="px-12 flex justify-between">
            <div className="text-2xl text-primary font-bold">
              Join Us & Increase Your Business.
            </div>
            <div className="space-x-2">
              <input
                type="text"
                className="input"
                placeholder="Enter your email"
              />
              <button className="btn btn-secondary">Join</button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-16 relative z-40">
        <div
          className="bg-white drop-shadow-2xl rounded-2xl -mb-10 py-12"
          style={{ backgroundImage: `url("/images/shape-100.png")` }}
        >
          <div className="px-12 grid grid-cols-2 gap-16">
            <div className="border-l border-neutral border-l-2 pl-16">
              <div className="text-4xl text-error mb-4">
                <RiCustomerService2Line />
              </div>
              <div className="text-4xl text-neutral">
                Convinced yet? Let&apos;s make <br />
                something great together.
              </div>
              <div className="mt-8 space-y-8">
                <div className="grid grid-cols-12 items-center gap-x-2">
                  <div>
                    <FiMapPin className="text-secondary text-xl" />
                  </div>
                  <div className="col-span-11">
                    <div className="font-bold">Address</div>
                    <div>Adjacent Pentecost, Adenta - Accra, Ghana</div>
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-2">
                  <div>
                    <FiPhone className="text-secondary text-xl" />
                  </div>
                  <div className="col-span-11">
                    <div className="font-bold">Phone</div>
                    <div>+233(0)501064110 / 0302549659</div>
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-2">
                  <div>
                    <FiMail className="text-secondary text-xl" />
                  </div>
                  <div className="col-span-11">
                    <div className="font-bold">Email</div>
                    <div>info@fixlinkconsultgh.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-neutral rounded-lg">
              <div className="text-3xl text-white font-bold">
                Have any questions?
              </div>
              <div className="text-gray-200">
                Please contact our customer suppport team today.
              </div>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-8">
                <div className="form-control w-full col-span-2">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="input  input-bordered w-full"
                  />
                </div>

                <div className="form-control w-full">
                  <input
                    type="text"
                    placeholder="Email"
                    className="input input-bordered w-full"
                  />
                </div>

                <div className="form-control w-full">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="input input-bordered w-full"
                  />
                </div>

                <div className="form-control w-full col-span-2">
                  <input
                    type="text"
                    placeholder="Location"
                    className="input input-bordered w-full"
                  />
                </div>

                <div className="form-control w-full col-span-2">
                  <textarea
                    rows={3}
                    placeholder="Write your question"
                    className="input input-bordered w-full"
                  ></textarea>
                </div>
                <button className="btn btn-secondary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Index;

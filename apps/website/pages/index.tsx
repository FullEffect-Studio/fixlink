import { Carousel } from 'antd';

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
                Tacking projects of any size
              </div>
              <div className="text-4xl text-white font-black uppercase drop-shadow my-4">
                <span className="text-orange-500">Professional</span> Real Estate Developers
              </div>

              <div className="text-white mt-2">
                From design and construction to the importation of building materials and the selling and renting of properties, we&apos;ve got you covered.
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
                We understand that running a business can be challenging, which is why we offer a wide range of services to help you navigate the complexities of the business world.
              </div>

              <div className="mt-4 hidden space-x-4">
                {/*<button className="btn btn-accent btn-md">Apply Now</button>*/}
                <button className="btn btn-info btn-md">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>

      <div className="container mx-auto py-16">
        <div className="badge badge-primary bg-opacity-10 badge-lg text-accent">Core Services</div>
        <div className="text-3xl font-bold my-4">Our Services</div>
      </div>
    </main>
  );
}


export default Index;

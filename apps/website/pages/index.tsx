import { Carousel } from 'antd';
import { Collapse } from 'antd';



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

      <div className="container mx-auto py-16">
        <div className="badge badge-primary bg-opacity-10 badge-lg text-accent">
          Core Services
        </div>
        <div className="text-3xl font-bold my-4">Our Services</div>
      </div>

      <div className="px-16 relative z-40 my-16">
        <div className="bg-accent rounded-2xl py-12" style={{backgroundImage: `url("/images/shape-100.png")`}}>
          <div className="px-12 flex justify-between">
            <div className="text-2xl text-primary font-bold">Join Us & Increase Your Business.</div>
            <div className="space-x-2">
              <input type="text" className="input" placeholder="Enter your email"/>
              <button className="btn btn-secondary">Join</button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-16 relative z-40">
        <div className="bg-accent rounded-2xl -mb-10 py-12" style={{backgroundImage: `url("/images/shape-100.png")`}}>
            <div className="px-12 grid grid-cols-2 gap-16">

              <div className="p-8 bg-neutral rounded-lg">
                <div className="text-3xl text-white font-bold">Have any questions?</div>
                <div className="text-gray-200">Please contact our customer suppport team today.</div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-8">
                  <div className="form-control w-full col-span-2">
                    <input type="text" placeholder="Full Name" className="input  input-bordered w-full"/>
                  </div>

                  <div className="form-control w-full">
                    <input type="text" placeholder="Email" className="input input-bordered w-full"/>
                  </div>


                  <div className="form-control w-full">
                    <input type="text" placeholder="Phone Number" className="input input-bordered w-full"/>
                  </div>

                  <div className="form-control w-full col-span-2">
                    <input type="text" placeholder="Location" className="input input-bordered w-full"/>
                  </div>

                  <div className="form-control w-full col-span-2">
                  <textarea rows={3} placeholder="Write your question" className="input input-bordered w-full">

                  </textarea>
                  </div>
                  <button className="btn btn-secondary">Submit</button>
                </div>
              </div>
              <div className="text-2xl text-primary font-bold border-l border-neutral border-l-2 pl-16">
                <div>Frequently Asked Question (FAQs)</div>
                <div className="mt-4">
                  <Collapse accordion bordered={false} ghost activeKey={1}>
                    <Panel header="Why study abroad?" key="1">
                      <div className="bg-neutral rounded-lg text-gray-200 px-3 py-2">
                        Its good to learn from other cultures and to learn in a whole new cosmopolitan environment is awesome.
                        It helps in acquisition of a modern way of doing things and also provides better facilities to learn with.
                      </div>
                    </Panel>
                    <Panel header="How many days does it take to get birth cert done?" key="2">
                      <div className="bg-neutral rounded-lg text-gray-200 px-3 py-2">
                        We typically get your birth certificates done with 2 business weeks.
                        That is 14 days from commencement.
                      </div>
                    </Panel>
                    <Panel header="How do I get started with my application to study in abroad?" key="3">
                      <div className="bg-neutral rounded-lg text-gray-200 px-3 py-2">
                        <ol className="list-decimal list-inside">
                          <li>Choose your programme you intend to study</li>
                          <li>Provide us with your preferred country if any</li>
                          <li>Provide us with your contact details</li>
                          <li>Provide your current level of education</li>
                        </ol>
                      </div>
                    </Panel>
                    <Panel header="This is my first time travelling, what do I need to get my Visa?" key="4">
                      <div className="bg-neutral rounded-lg text-gray-200 px-3 py-2">
                        <div>
                          You will need to first have your passport. If you do not have it already, please contact.
                          Then let us know where you want to go, we handle the rest for you.
                        </div>
                      </div>
                    </Panel>
                    <Panel header="Are there Scholarship Programmes Available?" key="5">
                      <div className="bg-neutral rounded-lg text-gray-200 px-3 py-2">
                        <div>
                          YES! Scholarships are available for most countries
                        </div>
                      </div>
                    </Panel>

                    <Panel header="  What's Next After Gaining My Acceptance Letter?" key="6">
                      <div className="bg-neutral rounded-lg text-gray-200 px-3 py-2">
                        <div>
                          At this stage, we guide you on the necessary documents that the embassy or consulate require from yourself, parents or guardians to decide whether to give you the visa or not.
                          Our job is to provide you with the vital tools which would enable you to get the visa.
                        </div>
                      </div>
                    </Panel>
                  </Collapse>
                </div>
              </div>

            </div>
        </div>
      </div>
    </main>
  );
}

export default Index;

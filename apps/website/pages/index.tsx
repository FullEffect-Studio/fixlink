import { Carousel} from "antd";
import "./index.module.css"
import {FiArrowLeft, FiArrowRight} from "react-icons/fi";

export function Index({data}) {


  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  type ArrowPosition = "left" | "right"

  const Arrow = (position: ArrowPosition) => (
    <button className="btn btn-circle">
      {position == 'left' ? <FiArrowLeft/> : <FiArrowRight/>}
    </button>
  );

  return (
    <main>
      <Carousel afterChange={onChange} prevArrow={Arrow('left')}>
        <div className="bg-cover bg-gray-300 slide1 h-120 lg:h-100">
          <div className='container mx-auto py-16 px-4 lg:px-16'>
            <div className="bg-primary p-8 lg:w-3/5 bg-opacity-75 rounded-lg">
              <div className="uppercase text-accent text-lg">Educational Consultants</div>
              <div className="text-white text-2xl">Start planning your future</div>
              <div className="text-5xl text-white font-black uppercase drop-shadow">study in abroad</div>

              <div className="text-white mt-2">
                At Fix-Link Consult Ltd, we believe that foreign education is not an expense but an investment where the return comes over a lifetime.
              </div>

              <div className="mt-4 space-x-4">
                <button className="btn btn-accent btn-md">Apply Now</button>
                <button className="btn btn-info btn-md">View Schools</button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-cover bg-gray-300 slide2 h-100">
          <h3>Slide 2</h3>
        </div>
      </Carousel>
    </main>
  );
}

export async function getStaticProps(){
  return {
    props: {
      data: ["Fix-Link Consult", "Adenta", "Madina"]
    }
  }
}

export default Index;

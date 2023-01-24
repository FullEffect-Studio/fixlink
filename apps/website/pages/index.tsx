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
        <div className="bg-cover bg-gray-300 slide1 h-96">
          <h3>Slide 1</h3>
        </div>

        <div className="bg-cover bg-gray-300 slide2 h-96">
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

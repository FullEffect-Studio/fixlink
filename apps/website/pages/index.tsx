import { Carousel} from "antd";
import {CSSProperties} from "react";
import "./index.module.css"
import slide1 from '../public/images/study_abroad.png'
import {FiArrowLeft, FiArrowRight} from "react-icons/fi";
import * as url from "url";

export function Index({data}) {

  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };


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
        <div style={{backgroundImage: `url(${slide1})`, height: '100vh'}} className="bg-cover bg-gray-300 slide1 h-64">
          <h3>Slide 1</h3>
        </div>
        {/*<div>*/}
        {/*  <h3 style={contentStyle}>2</h3>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <h3 style={contentStyle}>3</h3>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <h3 style={contentStyle}>4</h3>*/}
        {/*</div>*/}
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

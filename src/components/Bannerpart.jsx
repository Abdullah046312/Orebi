import React from 'react';
import Container from './Container';
import headphone from "../assets/headphone.png"
import headphone1 from "../assets/headphone1.png"
import headphone2 from "../assets/headphone2.png"
import headphone3 from "../assets/headphone3.png"

import Slider from "react-slick";




const Bannerpart = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    
  };
  return (
   <section>
    <Slider {...settings}>
    <div className="">
      <img src={headphone} alt="" />
      
    </div>
    <div className="w-[1920px] h-[597px]">
      <img src={headphone1} alt="" />
    </div>
    <div className="w-[1920px] h-[597px]">
      <img src={headphone2} alt="" />
    </div>
    <div className="w-[1920px] h-[597px]">
      <img src={headphone3} alt="" />
    </div>
   

    </Slider>
   </section>
  );
};

export default Bannerpart;

import React from 'react';
import Slider from 'react-slick';
import banner from "../assets/banner.png";
import headphone1 from "../assets/headphone1.png";
import headphone2 from "../assets/headphone2.png";
import headphone3 from "../assets/headphone3.png";

const Bannerpart = () => {
  const settings = {
    dots: true,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

    
  };

  return (
    <section className="relative">
      <Slider {...settings}>
        {[banner, headphone1, headphone2, headphone3].map((image, index) => (
          <div key={index} className="relative w-full">
            <img src={image} alt={`Banner ${index + 1}`} className="w-full md:h-[650px] h-[200px]" />
            <div className="absolute md:top-[167px] md:left-[293px] top-1 left-5  ">
              <h2 className="text-[26px] md:text-[49px] text-[#262626] font-DMs font-bold mt-5">Final Offer</h2>
              <div className="flex justify-center items-center md:mt-3 md:gap-3 gap-2">
                <h4 className="text-[14px] md:text-[16px] text-[#6D6D6D] font-DMs font-normal">Up to </h4>
                <h3 className="text-[26px] md:text-[40px] text-[#262626] font-DMs font-bold ">50%</h3>
                <h4 className="text-[14px] md:text-[16px] text-[#6D6D6D] font-DMs font-normal">sale for all furniture items!</h4>
              </div>
              <button className=" md:mt-7 mt-3 h-[40px] md:h-[50px] w-[80px] md:w-[185px] bg-black text-white text-[12px] md:text-[16px] font-DMs font-bold hover:bg-[#F39422] duration-300 ease-in-out">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Bannerpart;

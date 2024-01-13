// Slider.js
import React from 'react';
import StarRatings from "react-star-ratings";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import lefttopimg from '../../../assets/images/shape-45.png';
import rightbottoming from '../../../assets/images/shape-46.png';
import { IoMdArrowForward } from "react-icons/io";

const Index = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {data.map((doctor, index) => (
        <div key={index} className="outer-box">
          <div className="inner-box">
            <div className="pattern">
              <img className="pattern-1" src={lefttopimg} alt="Pattern 1" />
              <img className="pattern-2" src={rightbottoming} alt="Pattern 2" />
            </div>
            <div
              className="card bg-white rounded-lg p-4 shadow-md cursor-pointer transition-transform text-center"
            >
              <div className="rounded-full bg-gray-300 h-12 w-12 flex items-center justify-center mx-auto mb-4 doctr-icon">
                {doctor.icon}
              </div>
              <h3 className="text-sm font-semibold mb-1">{doctor.specialist}</h3>
              <IoMdArrowForward className='arrow-card'/>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Index;

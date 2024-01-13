// Slider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GiPolarStar } from "react-icons/gi";
import { RiStarLine } from "react-icons/ri";
import { MdStars } from "react-icons/md";
const index = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
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
        <div
          key={index}
          className="m-5 p-6  background-gradient rounded-lg text-white relative  md:w-96 hover:bg-[#5EEF8F] "

        >
          <div className="mb-4 flex justify-between w-full">
            <h2 className="text-lg font-bold ">{doctor.name}</h2>
            <div className='flex space-x-1 items-center justify-center'>
              {/* <RiStarLine /> */}
              <MdStars size={32} />
              <div className='gold-gradient w-36 text-xs flex   items-center px-1 badge-bg'  >
                <p className='p-2 text-xs' >PLATINIUM PROVIDER</p>
              </div>
            </div>

            {/* <GiPolarStar /> */}


            {/* <p>{`Date: ${doctor.date}`}</p> */}
          </div>
          <p>{` ${doctor.feild}`}</p>
          <div className='flex  h-44'>
            <div className="border flex-row items-center p-2 justify-center rounded-md bg-white bg-opacity-20  backdrop-blur-lg h-20 mt-5 w-full">
              <p className="font-bold">Appointment</p>
              <p>{doctor.appointment}</p>
            </div>

            <img
              src={doctor.imageUrl}
              alt={doctor.name}
              className="object-cover absolute right-0 bottom-0  transition  duration-300 ease-in-out transform hover:scale-105 w-54 h-40 md:h-60 md:w-54 "
              // style={{ width: "50%", height: "80%", }}
            />

          </div>
        </div>
      ))}

    </Slider>
    // width: 90%;
    // height: 100%;
    // margin-left: 2rem;
    // margin-top: 0.5rem;

  );
};

export default index;

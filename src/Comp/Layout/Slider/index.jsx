// Slider.js
import React from 'react';
import StarRatings from "react-star-ratings";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const index = ({ data }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
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
      {data.map((review, index) => (
        <div
        key={index}
        className="flex-shrink-0 bg-white border rounded-lg p-4 shadow-md  hover:shadow-lg  "
        style={{
            width: "300px",
            transition: "all 0.3s ease-in-out",
        }}
    >
        <div className="flex items-center mb-2 ">
            <img
                src={review.thumbImage}
                alt="Reviewer's thumb"
                className="w-16 h-16 rounded-full mr-2"
            />
            <div className="text-gray-900 font-bold">{review.name}</div>
        </div>
        <p className="mb-2">{review.review}</p>
        <div className="bg-[#ebdfef] rounded-md p-2">
            <StarRatings
                rating={review.rating}
                starRatedColor="orange"
                numberOfStars={5}
                starDimension="20px"
                starSpacing="2px"
            />
        </div>
    </div>
      ))}
    </Slider>
  );
};

export default index;

// DoctorTags.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const DoctorTags = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000,
        slidesToShow: 9,
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
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const tags = ["NearMe", "Popular", "Specialist", "Top", "cheap", "trusted", "new", "Experienced", "Female Doctors", "Discounts", "Lowest Fee", "Video Consultation", "Highest Rated"];
    const handleTagClick = (tag) => {
        console.log(`Tag clicked: ${tag}`);
    };

    return (
        // <div className="flex overflow-x-auto mb-4 p-2 scrollbar-hide sm:overflow-x-visible whitespace-no-wrap items-center justify-center">
        //     {tags.map((tag, index) => (
        //         <div
        //             key={index}
        //             className="cursor-pointer w-56 flex items-center justify-center border border-green-400 rounded-md sm:rounded-full sm:px-5 px-5 py-2 mr-3 whitespace-no-wrap transition duration-300 ease-in-out hover:bg-gray-100"
        //             onClick={() => handleTagClick(tag)}
        //         >
        //             {tag}
        //         </div>
        //     ))}
        // </div>
        <div className="mb-2 p-2 ">
            <Slider {...settings}>
                {tags.map((tag, index) => (
                    <div
                        key={index}

                        className="cursor-pointer   w-32  border border-green-400 rounded-full   p-2   transition duration-300 ease-in-out hover:bg-gray-100"
                        onClick={() => handleTagClick(tag)}
                    >
                        <p
                            style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                        >
                            {tag}
                        </p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default DoctorTags;

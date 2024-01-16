import React from "react";
import dotrimg from './d.png'
import Doc2 from './Doc2.png'
import {Link} from 'react-router-dom'
const Banner = () => {
    return (
        <div className="w-full  bg-gray-100  md:mt-24">
            {/* First Card */}
            <div className="md:mx-20 flex flex-col md:flex-row  md:item-center md:justify-center items-center justify-center mt-6 ">

                <Link
                    to="/OnlineDoc"
                    className="w-full flex flex-col md:flex-row background-gradient md:64 lg:h-64 rounded-lg md:ml-4  md:mr-2  items-center justify-center mb-4 md:mb-0 shadow-xl"
                >

                    <img
                        src="/1.png"
                        alt="Online Doctors"
                        className="h-52 md:h-72 lg:h-72 mr-2 md:mr-20 md:mb-8  transition-transform transform hover:scale-105"
                    />
                    <div className="flex-row items-center justify-center p-4 pl-10 ">
                        <h1 className="text-3xl h-20">
                            Looking for Online Doctors? {" "} <br />
                            <span
                                className="text-xl mt-5">
                                {/* Find the nearest one! */}
                                <h1 className="text-xl mt-3">Get Connected with Us through <br />the Connect App.</h1>
                            </span>
                        </h1>
                        <button
                            // onClick={() => {
                            //     window.location.href = "https://www.playstore.com"; // Replace with your desired link
                            // }}
                            className=" px-3 py-1 md:px-4 md:py-2 bg-gray-800 text-white rounded-md md:mt-10 mt-16 mx-2 hover:shadow-lg transition-transform transform hover:scale-105 w-36"
                        >
                            Visit Now
                        </button>
                    </div>
                </Link>

                {/* Second Card */}
                <div className="w-full  md:justify-center  md:h-64 bg-[#b7e9e1] flex rounded-lg md:ml-4 md:mr-4 shadow-xl">
                    <div className="flex items-center justify-start p-4 pl-10">
                        <div>
                            <h1 className="text-3xl mb-4">Are you a Doctor?</h1>

                            <h1 className="text-xl mb-4">Get Connected with Us through the Connect App.</h1>

                            <button
                                onClick={() => {
                                    window.location.href = "https://www.playstore.com"; // Replace with your desired link
                                }}
                                className="px-3 py-1 md:px-4 md:py-2 background-gradient text-white rounded-md hover:shadow-lg transition-transform transform hover:scale-105"
                            >
                                Download Now
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-end p-4 flex-grow pr-10 md:pr-40">
                        <img
                            src={Doc2}
                            alt="Banner Image"
                            className="h-56 md:h-72 lg:h-72 transition-transform md:mb-8 lg:mb-8   transform hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

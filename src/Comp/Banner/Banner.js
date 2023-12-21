import React from "react";

const Banner = () => {
    return (
        <div className="w-full md:w-max pl-6 flex flex-col md:flex-row items-center justify-center mt-6 bg-gray-100">
            {/* First Card */}
            <a
                href="/OnlineDoc"
                className="w-full h-52 bg-[#5EEF8F] rounded-lg md:ml-4 md:mr-2 flex items-center justify-center mb-4 md:mb-0"
            >
                <img
                    src="/1.png"
                    alt="Online Doctors"
                    className="h-52 md:h-40 lg:h-52 mr-2 md:mr-0 transition-transform transform hover:scale-105"
                />
                <h1 className="text-2xl">
                    Online Doctors{" "}
                    <span style={{color: "orange"}} className="font-semibold">
                        Visit Now
                    </span>
                </h1>
            </a>

            {/* Second Card */}
            <div className="w-full md:min-h-max md:justify-center md:min-w-max h-52 bg-[#ebdfef] flex rounded-lg md:ml-4 md:mr-4">
                <div className="flex items-center justify-start p-4 pl-10">
                    <div>
                        <h1 className="text-3xl mb-4">Are you a Doctor?</h1>

                        <h1 className="text-xl mb-4">Get Connected with Us through the Connect App.</h1>

                        <button
                            onClick={() => {
                                window.location.href = "https://www.playstore.com"; // Replace with your desired link
                            }}
                            className="px-3 py-1 md:px-4 md:py-2 bg-[#5EEF8F] text-white rounded-md hover:shadow-lg transition-transform transform hover:scale-105"
                        >
                            Download Now
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-end p-4 flex-grow pr-10 md:pr-40">
                    <img
                        src="/sp.png"
                        alt="Banner Image"
                        className="h-full md:h-40 lg:h-full transition-transform transform hover:scale-105"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;

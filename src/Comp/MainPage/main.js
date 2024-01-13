import React, { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faChevronDown, faPhone } from "@fortawesome/free-solid-svg-icons";
// import Particles from 'react-tsparticles-js';

const HeroSection = () => {

    const messages = [
        "1 million+ patient reviews",
        "250000+ doctors",
        "75 million+ userservice",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [messages.length]);

    const [locationCoords, setLocationCoords] = useState({
        latitude: null,
        longitude: null,
    });
    const [locationText, setLocationText] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [suggestions, setSuggestions] = useState([]);

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocationCoords({ latitude, longitude });
                    setLocationText(`(${latitude}, ${longitude})`);
                },
                (error) => {
                    console.error("Error getting location:", error.message);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    };

    const handleLocationChange = (input) => {
        setLocationText(input);

        // Example list of location suggestions
        const suggestionsList = ["New York, NY", "Los Angeles, CA", "Chicago, IL", "Houston, TX"];

        // Filter suggestions based on the user's input
        const filteredSuggestions = suggestionsList.filter((suggestion) =>
            suggestion.toLowerCase().includes(input.toLowerCase())
        );

        setSuggestions(filteredSuggestions);
    };

    const handleSuggestionClick = (suggestion) => {
        setLocationText(suggestion);
        setShowSuggestions(false);
    };

    const toggleSuggestions = () => {
        setShowSuggestions(!showSuggestions);
    };

    useEffect(() => {
        // Fetch user's current location when the component mounts
        handleLocationClick();
    }, []); // The empty dependency array ensures the effect runs only once when the component mounts




    return (

        <div
            className="background-gradient relative flex items-center justify-center bg-cover bg-center  "
            style={{

                // backgroundImage: 'url("/bckg.png")',
                height: "70vh", borderBottomRightRadius: "20px", borderBottomLeftRadius: "20px"
            }}
        >
            <div className="text-center text-white  md:w-full " style={{ marginTop: "10rem" }}>
                <h1 className="text-4xl font-semibold mb-4 font-sans">
                    Find and book <span style={{ color: "black" }}> The Best</span> Doctors Near You
                </h1>

                <div className="flex flex-col items-center mt-8 sm:flex-row sm:justify-center md:w-full md:items-center ">
                    <div className="relative mb-4 sm:mb-0">
                        <FontAwesomeIcon
                            icon={faMapMarkerAlt}
                            className="cursor-pointer absolute left-4 top-1/2 transform -translate-y-1/2 
                            text-[#ff9e15]
                            "
                            onClick={handleLocationClick}
                        />
                        <div className="input-container md:w-full">
                            <div className="input-bar md:w-full">
                                <input
                                    type="text"
                                    placeholder="Location"
                                    className="py-2 px-6 pl-12 md:border md:border-gray-300 rounded-sm focus:outline-none md:rounded-l-lg bg-transparent md:bg-white w-72 md:w-96 lg:w-96 h-14 text-black"
                                    value={locationText}
                                    // style={{ width: "33rem" }}
                                    onChange={(e) => handleLocationChange(e.target.value)}
                                    onFocus={toggleSuggestions}
                                />
                                {/* <FontAwesomeIcon
                                    icon={faChevronDown}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#ff9e15] cursor-pointer"
                                    onClick={toggleSuggestions}
                                /> */}
                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#ff9e15] cursor-pointer ">

                                    <span class="input-group-append od-btn-mediumgray-default btn-sm text-sm m-1 mx-2 py-1 px-3 bg-red-100 rounded   flex align-items-center od-text-primary" id="gps_icon">
                                        <svg width="20px" height="20px" viewBox="0 0 561 561" fill="currentColor">
                                            <path d="M280.5,178.5c-56.1,0-102,45.9-102,102c0,56.1,45.9,102,102,102c56.1,0,102-45.9,102-102 C382.5,224.4,336.6,178.5,280.5,178.5z M507.45,255C494.7,147.9,410.55,63.75,306,53.55V0h-51v53.55 C147.9,63.75,63.75,147.9,53.55,255H0v51h53.55C66.3,413.1,150.45,497.25,255,507.45V561h51v-53.55 C413.1,494.7,497.25,410.55,507.45,306H561v-51H507.45z M280.5,459C181.05,459,102,379.95,102,280.5S181.05,102,280.5,102 S459,181.05,459,280.5S379.95,459,280.5,459z"></path>
                                        </svg>
                                        {/* <span class="d-inline-block mx-1">Detect</span> */}
                                    </span>
                                </div>
                            </div>
                            {showSuggestions && suggestions.length > 0 && (
                                <div className="suggestions-container">
                                    <ul className="suggestions-list">
                                        {suggestions.map((suggestion, index) => (
                                            <li
                                                key={index}
                                                className="suggestion-item border-b border-gray-300 py-2 px-4 cursor-pointer"
                                                onClick={() => handleSuggestionClick(suggestion)}
                                            >
                                                {suggestion}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    <input
                        type="text"
                        placeholder="Search for Doctors, Specialists, Experts, Surgeons"
                        className="py-2 p-2 border border-gray-300 focus:outline-none md:rounded-r-lg   h-14 text-black srchbar-input"

                    />
                    <div className="srch-btn-main-div">
                        <button className="bg-[#ff9e15] text-white py-2  rounded h-14 mt-4   hover:bg-[#e68812] srch-btn">
                            Search
                        </button>
                    </div>
                </div>
                <div>
                    {messages.map((message, index) => (
                        <div key={index} style={{ display: index === currentIndex ? "block" : "none" }} className=" flex items-center">


                            <div className=" text-4xl flex items-center justify-center counter-div " >
                                <h1 className='bg-green-500 p-2 rounded'>
                                    {message}
                                </h1>
                            </div>
                        </div>
                        // <div key={index} className="w-full flex items-center justify-center text-4xl ">
                        //     <div className="bg-blue-500 ">

                        //     </div>
                        // </div>
                    ))}
                </div>


            </div>
        
              

        </div>
    );
};

export default HeroSection;

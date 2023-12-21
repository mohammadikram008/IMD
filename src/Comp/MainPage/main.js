import React, {useState, useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt, faChevronDown} from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
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
                    const {latitude, longitude} = position.coords;
                    setLocationCoords({latitude, longitude});
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
            className="relative flex items-center justify-center bg-cover bg-center"
            style={{backgroundImage: 'url("/bckg.png")', height: "70vh"}}
        >
            <div className="text-center text-white">
                <h1 className="text-4xl font-semibold mb-4 font-sans">
                    Find and book <span style={{color: "#ff9e15"}}> The Best</span> Doctors Near You
                </h1>

                <div className="flex flex-col items-center mt-8 sm:flex-row sm:justify-center">
                    <div className="relative mb-4 sm:mb-0">
                        <FontAwesomeIcon
                            icon={faMapMarkerAlt}
                            className="cursor-pointer absolute left-4 top-1/2 transform -translate-y-1/2 text-[#ff9e15]"
                            onClick={handleLocationClick}
                        />
                        <div className="input-container">
                            <div className="input-bar">
                                <input
                                    type="text"
                                    placeholder="Location"
                                    className="py-2 px-6 pl-12 border border-gray-300 rounded-sm focus:outline-none w-full sm:w-64 md:w-80 lg:w-96 h-14 text-black"
                                    value={locationText}
                                    onChange={(e) => handleLocationChange(e.target.value)}
                                    onFocus={toggleSuggestions}
                                />
                                <FontAwesomeIcon
                                    icon={faChevronDown}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#ff9e15] cursor-pointer"
                                    onClick={toggleSuggestions}
                                />
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
                        className="py-2 px-6 border border-gray-300 focus:outline-none rounded-sm w-full sm:w-64 md:w-80 lg:w-96 h-14 text-black"
                    />
                    <button className="bg-[#ff9e15] text-white py-2 px-12 rounded-sm h-14 mt-4 sm:mt-0 sm:ml-4 hover:bg-[#e68812]">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;

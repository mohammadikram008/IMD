import React, {useState, useEffect, useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faTimes, faUserMd, faHospital, faBlog} from "@fortawesome/free-solid-svg-icons";
import HeroSection from "../MainPage/main";
import Banner from "../Banner/Banner";
import Doctors from "../Categories/catg";
import OnlineDoctors from "../Online Doc/doc";
import ReviewSection from "../Reviews/review";
import ScreenComponent from "../Banner2/banner2";
import Footer from "../Footer";

const HomePage = () => {
    const [isDoctorsOpen, setDoctorsOpen] = useState(false);
    const [isHospitalsOpen, setHospitalsOpen] = useState(false);
    const [isLogoRotated, setLogoRotation] = useState(false);
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const doctorsRef = useRef(null);
    const hospitalsRef = useRef(null);

    const toggleDoctorsDropdown = () => {
        setDoctorsOpen(!isDoctorsOpen);
    };

    const toggleHospitalsDropdown = () => {
        setHospitalsOpen(!isHospitalsOpen);
    };

    const toggleLogoRotation = () => {
        setLogoRotation(!isLogoRotated);
    };

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    const closeDropdowns = (event) => {
        if (
            doctorsRef.current &&
            !doctorsRef.current.contains(event.target) &&
            hospitalsRef.current &&
            !hospitalsRef.current.contains(event.target)
        ) {
            setDoctorsOpen(false);
            setHospitalsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", closeDropdowns);

        return () => {
            document.removeEventListener("click", closeDropdowns);
        };
    }, []);

    return (
        <div>
        <header
            className={`p-4 bg-gray-900 text-white ${
                isDrawerOpen ? "flex flex-col" : "flex flex-col sm:flex-row"
            } justify-between items-center`}
        >
            <div className="flex items-center space-x-10 mb-4 sm:mb-0">
                {/* Drawer Toggle Icon */}
                <button className="sm:hidden focus:outline-none" onClick={toggleDrawer}>
                    <FontAwesomeIcon icon={isDrawerOpen ? faTimes : faBars} />
                </button>

                {/* Logo */}
                <img
                    src={isLogoRotated ? "/Logo Imd.png" : "/Logo.png"}
                    alt="Logo"
                    className={`mb-2 sm:mr-2 h-11 pl-5 hover:rotate-1 ${isLogoRotated ? "rotate-1" : ""}`}
                    onClick={toggleLogoRotation}
                />

                {/* Navigation Options */}
                <nav className={`space-x-4 ${isDrawerOpen ? "hidden sm:flex" : "hidden sm:flex"}`}>
                    {/* Doctors Dropdown */}
                    <div className="relative inline-block text-left" ref={doctorsRef}>
                        <button
                            onClick={toggleDoctorsDropdown}
                            className="bg-gray-900 text-white px-2 py-1 focus:outline-none flex items-center"
                        >
                            {isDrawerOpen ? <FontAwesomeIcon icon={faUserMd} /> : "DOCTORS"}{" "}
                            <span className="ml-1">{isDrawerOpen ? "" : "▼"}</span>
                        </button>
                        {isDoctorsOpen && (
                            <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Specialization 1
                                    </a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Specialization 2
                                    </a>
                                    {/* Add more specializations as needed */}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Hospitals Dropdown */}
                    <div className="relative inline-block text-left" ref={hospitalsRef}>
                        <button
                            onClick={toggleHospitalsDropdown}
                            className="bg-gray-900 text-white px-2 py-1 focus:outline-none flex items-center"
                        >
                            {isDrawerOpen ? <FontAwesomeIcon icon={faHospital} /> : "Hospitals"}{" "}
                            <span className="ml-1">{isDrawerOpen ? "" : "▼"}</span>
                        </button>
                        {isHospitalsOpen && (
                            <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Category 1
                                    </a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Category 2
                                    </a>
                                    {/* Add more categories as needed */}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Health Blog Option (without dropdown) */}
                    <a href="#" className="bg-gray-900 text-white px-2 py-1 hover:bg-gray-800 rounded">
                        {isDrawerOpen ? <FontAwesomeIcon icon={faBlog} /> : "Health Blog"}
                    </a>
                </nav>
            </div>

            {isDrawerOpen && (
                <div className="flex flex-col sm:hidden">
                    {/* Drawer Content */}
                    <div className="flex items-center space-x-4">
                        <a href="#" className="bg-gray-900 text-white px-2 py-1 hover:bg-gray-800 rounded">
                            <FontAwesomeIcon icon={faUserMd} /> Specialization 1
                        </a>
                        <a href="#" className="bg-gray-900 text-white px-2 py-1 hover:bg-gray-800 rounded">
                            <FontAwesomeIcon icon={faUserMd} /> Specialization 2
                        </a>
                        <a href="#" className="bg-gray-900 text-white px-2 py-1 hover:bg-gray-800 rounded">
                            <FontAwesomeIcon icon={faHospital} /> Category 1
                        </a>
                        <a href="#" className="bg-gray-900 text-white px-2 py-1 hover:bg-gray-800 rounded">
                            <FontAwesomeIcon icon={faHospital} /> Category 2
                        </a>
                        <a href="#" className="bg-gray-900 text-white px-2 py-1 hover:bg-gray-800 rounded">
                            <FontAwesomeIcon icon={faBlog} /> Health Blog
                        </a>
                    </div>
                </div>
            )}

            <div className="flex items-center space-x-4">
                {/* Styled Buttons */}
                <button className="border border-white text-white px-4 py-2 hover:border-[#5EEF8F] hover:text-[#5EEF8F] focus:outline-none">
                    Join as Doctor
                </button>
                <button className="border border-white text-white px-4 py-2 hover:border-[#5EEF8F] hover:text-[#5EEF8F] focus:outline-none">
                    Login/Signup
                </button>
            </div>
          
        </header>
        <HeroSection/>
        <Banner/>
        <Doctors/>
        <OnlineDoctors/>
        <ReviewSection/>
        <ScreenComponent/>
        <Footer/>
        </div>
    );
};

export default HomePage;

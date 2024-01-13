import React, { Fragment,useState } from 'react'

import { IoCallOutline } from "react-icons/io5";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { getFontStyle } from '../Layout/fontUtility/fontUtility';
const Navbar = () => {

    const mediumFontStyle = getFontStyle('medium');
    const blackFontStyle = getFontStyle('black');
    const boldFontStyle = getFontStyle('bold');
    const [isOpen, setIsOpen] = useState(false);
    const [doctorDropdown, setDoctorDropdown] = useState(false);
    const [diseaseDropdown, setDiseaseDropdown] = useState(false);

    const toggleDoctorDropdown = () => {
        setDoctorDropdown(!doctorDropdown);
        if (diseaseDropdown) setDiseaseDropdown(false);
    };

    const toggleDiseaseDropdown = () => {
        setDiseaseDropdown(!diseaseDropdown);
        if (doctorDropdown) setDoctorDropdown(false);
    };
    const [isDoctorsOpen, setDoctorsOpen] = useState(false);
    const [isHospitalsOpen, setHospitalsOpen] = useState(false);
    const [isLogoRotated, setLogoRotation] = useState(false);
    const [isDrawerOpen, setDrawerOpen] = useState(false);



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
  return (
   <Fragment>
      <nav className="bg-gray-900 p-4 fixed top-0 w-full z-10  ">
                <div className="max-w-8xl mx-auto flex justify-between items-center md:mx-20">
                    <div className="flex items-center flex-shrink-0 text-black mr-6" >

                        <img
                            src={isLogoRotated ? "/Logo Imd.png" : "/Logo.png"}
                            alt="Logo"
                            className={`mb-2 sm:mr-2 h-12 pl-5 hover:rotate-1 ${isLogoRotated ? "rotate-1" : ""}`}
                            onClick={toggleLogoRotation}
                        />
                        <div className="hidden md:flex md:space-x-10 mx-5 mt-6 ">
                            <div className="relative md:mx-2">
                                <button
                                    className="text-white hover:text-gray-300 focus:outline-none flex items-center justify-center"
                                    onClick={toggleDoctorDropdown}
                                    // style={blackFontStyle}
                                >
                                    Doctors <span className="ml-1">{doctorDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                                </button>
                                {doctorDropdown && (
                                    <div className="absolute z-10 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
                                        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                            Doctor 1
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                            Doctor 2
                                        </a>
                                        {/* Add more doctor options as needed */}
                                    </div>
                                )}
                            </div>
                            <div className="relative ">
                                <button
                                    className="text-white hover:text-gray-300 focus:outline-none flex items-center justify-center"
                                    onClick={toggleDiseaseDropdown}
                                    style={mediumFontStyle}
                                >
                                    Diseases <span className="ml-1">{diseaseDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                                </button>
                                {diseaseDropdown && (
                                    <div className="absolute z-10 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl" >
                                        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                            Disease 1
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                            Disease 2
                                        </a>
                                        {/* Add more disease options as needed */}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center md:space-x-5">
                        <div className="hidden md:block">
                            <button className="bg-transparent border border-blue-500 hover:bg-blue-600 hover:text-white text-blue-600  py-2 px-4 rounded  " >
                                Login/SignUp
                            </button>
                        </div>
                        <div className="hidden md:block ml-2">
                            <button className="bg-transparent hover:bg-[#ff9e15] hover:text-white text-[#ff9e15] font-semibold hover:text-white py-2 px-4 border border-[#ff9e15] hover:border-transparent rounded">
                                Join Us
                            </button>
                        </div>
                        <div className="hidden md:block ml-2">
                            <button className=" flex items-center  bg-blue-900 hover:bg-blue-500 hover:text-white text-white font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded">
                                <IoCallOutline />  <span className="mx-1">034590522</span>
                            </button>
                        </div>
                        <div className="md:hidden mr-6 flex">

                            <div className=" ml-2">
                                {/* <button className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2  px-4 border border-blue-500 hover:border-transparent rounded">
                                    Join Us
                                </button> */}
                                <button className="bg-transparent hover:bg-[#ff9e15] hover:text-white mr-4 text-[#ff9e15] font-semibold hover:text-white py-2 px-4 border border-[#ff9e15] hover:border-transparent rounded">
                                    Join Us
                                </button>
                            </div>
                            <div>
                                {/* <FontAwesomeIcon
                            icon={faPhone}
                            className="cursor-pointer  text-white"
                            // onClick={handleLocationClick}
                        /> */}
                            </div>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="block text-white focus:outline-none"
                            >
                                <svg
                                    className="h-6 w-6 fill-current"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-gray-900">
                        <ul className="flex flex-col space-y-4">
                            <li className="relative">
                                <a href="#" className="block text-white hover:text-gray-300 py-2">
                                    Doctor
                                </a>
                                {/* Mobile Doctor Dropdown */}
                                <ul className="bg-gray-900 text-white rounded-lg ml-2 hidden">
                                    <li>
                                        <a href="#" className="block py-2 px-4 hover:bg-gray-700">Doctor 1</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-4 hover:bg-gray-700">Doctor 2</a>
                                    </li>
                                    {/* Add more doctor options as needed */}
                                </ul>
                            </li>
                            <li className="relative">
                                <a href="#" className="block text-white hover:text-gray-300 py-2">
                                    Disease
                                </a>
                                {/* Mobile Disease Dropdown */}
                                <ul className="bg-gray-900 text-white rounded-lg ml-2 hidden">
                                    <li>
                                        <a href="#" className="block py-2 px-4 hover:bg-gray-700">Disease 1</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-4 hover:bg-gray-700">Disease 2</a>
                                    </li>
                                    {/* Add more disease options as needed */}
                                </ul>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
   </Fragment>
  )
}

export default Navbar
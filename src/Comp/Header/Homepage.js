import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faUserMd, faHospital, faBlog, faPhone } from "@fortawesome/free-solid-svg-icons";
import HeroSection from "../MainPage/main";
import { IoCallOutline } from "react-icons/io5";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Banner from "../Banner/Banner";
import Doctors from "../Categories/catg";
import OnlineDoctors from "../Online Doc/doc";
import ReviewSection from "../Reviews/review";
import ScreenComponent from "../Banner2/banner2";
import Footer from "../Footer";
import { getFontStyle } from '../Layout/fontUtility/fontUtility';
import { FaCircleArrowUp } from "react-icons/fa6";

const HomePage = () => {

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
        <div className="relative">

            <HeroSection />
            <Banner />
            <Doctors />
            <OnlineDoctors />
            {/* <ReviewSection /> */}
            <ScreenComponent />
            <Footer />
            <button className="fixed  top-btn border"><FaCircleArrowUp size={27} /></button>
        </div>
    );
};

export default HomePage;

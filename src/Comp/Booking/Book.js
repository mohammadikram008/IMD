import React, { useState } from "react";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import { MdStars } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";
import { MdOutlineNightlightRound } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { BsHospital } from "react-icons/bs";
import { FaClock } from "react-icons/fa6";
///slider

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import lefttopimg from '../../../assets/images/shape-45.png';
// import rightbottoming from '../../../assets/images/shape-46.png';
// import { IoMdArrowForward } from "react-icons/io";

////calender
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Review = ({ patientName, review, date }) => (
    <div className="border p-4 mt-4 rounded-md">
        <div className="mt-2">
            <p className="text-lg font-semibold">{patientName}</p>
            <p className="text-gray-600">{review}</p>
            <p className="text-gray-600">{date}</p>
        </div>
    </div>
);

const Book = () => {

    ///calender code 
    const doctorAvailability = [
        { date: new Date(2024, 0, 5), available: true },
        { date: new Date(2024, 0, 1), available: true },
        { date: new Date(2024, 0, 6), available: true },
        { date: new Date(2024, 0, 15), available: true },
        { date: new Date(2024, 0, 10), available: false },
        // Add more availability data
    ];

    const [selectedCDate, setSelectedCDate] = useState(null);

    const tileContent = ({ date, view }) => {
        // Check if the date is in the doctor's availability data
        const isAvailable = doctorAvailability.some((availability) =>
            availability.date.toDateString() === date.toDateString() && availability.available
        );

        if (isAvailable) {
            return <div className="text-white font-bold bg-orange-400">.</div>;
        }

        return null;
    };




    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 20,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
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
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isDropdownOpenHos, setDropdownOpenHos] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    const toggleDropdownHos = () => {
        setDropdownOpenHos(!isDropdownOpenHos);
    };
    const weekDays = ['Monday ', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',];
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

    const incrementMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
        setSelectedDate(null);
    };

    const decrementMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
        setSelectedDate(null);
    };

    const incrementYear = () => {
        setCurrentDate(new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), 1));
        setSelectedDate(null);
    };

    const decrementYear = () => {
        setCurrentDate(new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), 1));
        setSelectedDate(null);
    };

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const handleDateClick = (day) => {
        setSelectedDate(day);
        console.log(`Selected date: ${day} ${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`);
    };

    const renderDateContainers = () => {
        const numberOfDays = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
        const dateContainers = [];

        for (let day = 1; day <= numberOfDays; day++) {
            const formattedDate = `${day}`;
            const isSelected = day === selectedDate;

            dateContainers.push(
                <div key={day} className="flex-shrink-0  w-20 h-52">
                    <div
                        className={`date-container rounded-full  border cursor-pointer h-32 w-16 text-xl flex flex-col justify-center items-center  ${isSelected ? "background-gradient text-white" : "border-black"}`}
                        onClick={() => handleDateClick(day)}
                    >
                        <div>{formattedDate}</div>
                        <div>{monthNames[currentDate.getMonth()]}</div>
                    </div>
                </div>
            );
        }

        return dateContainers;
    };

    const handleTimeSlotClick = (timeSlot) => {
        setSelectedTimeSlot(timeSlot);
        console.log(`Selected time slot: ${timeSlot}`);
    };

    const renderTimeSlotContainers = (timeSlots) => {
        return timeSlots.map((timeSlot, index) => (
            <div
                key={index}
                className={`time-slot-container mt-3  md:flex flex-col items-center justify-center md:mx-3   w-44  `}
                onClick={() => handleTimeSlotClick(timeSlot)}

            >
                <button className={` rounded-3xl p-4 border w-full h-full items-center cursor-pointer text-lg text-center ${selectedTimeSlot === timeSlot ? "background-gradient text-white text-center" : "border-black"}`}>{timeSlot}</button>
            </div>
        ));
    };

    return (
 


            <div className="container mx-auto p-8   bg-white mt-12   md:mt-24   ">

                {/* <div className="border p-4 flex items-center rounded-md">
                <img src="Doc1.jpg" alt="Doctor's avatar" className="w-16 h-16 rounded-full mr-4" />
                <div>
                    <h2 className="text-lg font-bold">Assist. Prof. Dr. Maryam Raana</h2>
                    <p className="text-gray-600">Islamabad Diagnostic Center (IDC) (JailRoad) </p>
                    <p className="text-gray-600">Fee: 1000</p>
                </div>
            </div> */}
                <div className="flex flex-col md:flex-row border justify-center items-center p-5 shadow  ">


                    <div className="flex-col  md:flex md:flex-row p-5 md:space-x-10 md:mt-10 w-full   md:p-5  ">
                        <div className=" flex justify-center items-center mt-5 md:justify-start md:items-start ">

                            <img src="Doc1.jpg" alt="Doctor" className=" w-1/2 md:w-full h-36 border-2 rounded-full mr-4" />
                        </div>
                        <div className="">
                            <div className='flex space-x-5  md:space-x-16 items-center  premium-div  mt-5 md:mt-0'>
                                {/* <RiStarLine /> */}
                                <h2 className="text-xl font-semibold mb-1">Dr.Jon doe</h2>
                                <MdStars size={32} className="hidden md:flex" />
                                <div className='gold-gradient md:w-36 text-xs flex   items-center px-1 badge-bg'  >
                                    <p className='p-2 text-xs' >PLATINIUM PROVIDER</p>
                                </div>
                            </div>

                            <p className="text-gray-600 text-sm mb-1 mx-5 md:mx-0">Gynecologist</p>
                            <p className="text-gray-600 text-sm mb-1 mx-5 md:mx-0">M.B.B.S,F.C.P.S</p>
                            {/* <p className="text-gray-600 text-sm mb-1">{doctorData.location}</p> */}
                            {/* <p className="text-gray-600 text-sm mb-1">Satisfied Patients: {totalReviews}</p> */}
                            {/* <p className="text-gray-600 text-sm mb-1">Response Time: {responseTime}</p> */}
                            <div className="flex text-gray-600 ">
                                <div className=" p-3 " style={{ borderRight: "1px solid #e5e5f0" }}>
                                    <h1 className="font-bold text-lg  text-green-500 ">Under 15 mint</h1>
                                    <h5>WAIT TIME</h5>
                                </div>

                                <div className="p-3 md:px-8 md:mx-10" style={{ borderRight: "1px solid #e5e5f0" }}>
                                    <h1 className="font-bold text-lg  text-green-500 ">
                                        7 years</h1>
                                    <h5>EXPERIENCE</h5>
                                </div>

                                <div className=" p-3 md:px-8 md:mx-10" >
                                    <h1 className="font-bold text-lg  text-green-500 ">
                                        98% (542)</h1>
                                    <h5>SATISFIED</h5>
                                </div>
                                {/* : {experience} years | Practice Area: {practiceArea} | Fee: {fee} */}
                            </div>
                            <div className="flex items-center justify-between mx-3 border-t border-b mt-2 md:mt-5   border-gray-200">
                                <div className="flex items-center justify-center">

                                    <h1 className=" text-green-500 ">Available:</h1>
                                    <h5 className="mx-2">Mon,31 August</h5>
                                </div>
                                <div className="flex items-center justify-center">

                                    <h1 className="text-green-500 ">Fees:</h1>
                                    <h5>$ 28.00</h5>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="md:mr-6">
                        <Calendar
                            onChange={setSelectedCDate}
                            value={selectedCDate}
                            tileContent={tileContent}
                        />
                    </div>
                </div>

                <div className="border p-4 mt-4 rounded-md shadow">
                    {/* <h2 className="text-lg font-bold">Choose Year and Month</h2> */}
                    <div className="flex items-center justify-between mt-4">
                        <button onClick={decrementYear} className="btn-icon text-white">
                            <BsCaretLeftFill />
                        </button>
                        <div className="flex items-center">
                            <button onClick={decrementMonth} className="btn-icon mr-2">
                                <BsCaretLeftFill />
                            </button>
                            <span className="text-lg font-bold">
                                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                            </span>
                            <button onClick={incrementMonth} className="btn-icon ml-2">
                                <BsCaretRightFill />
                            </button>
                        </div>
                        <button onClick={incrementYear} className="btn-icon text-white">
                            <BsCaretRightFill />
                        </button>
                    </div>
                </div>

                <div className="border py-6 h-48 md:p-4 mt-4 rounded-md shadow">

                    <Slider {...settings}>
                        {renderDateContainers()}
                    </Slider>

                    {/* <div className="flex items-center justify-between">
                    <button onClick={decrementMonth} className="btn-icon ">
                        <BsCaretLeftFill />
                    </button>
                    <div className="overflow-x-auto whitespace-nowrap  ">
                        <div className="flex">{renderDateContainers()}</div>
                    </div>
                    <button onClick={incrementMonth} className="btn-icon">
                        <BsCaretRightFill />
                    </button>
                </div> */}
                </div>

                <div className="border p-4 mt-4 text-center rounded-md shadow">
                    <div className="flex justify-center items-center space-x-2">
                        <IoMdSunny size={26} className="color-gradient" />
                        <h2 className="text-lg font-bold">Morning Slots</h2>
                    </div>
                    <div className="flex flex-col  md:flex-row items-center justify-center md:items-center md:justify-center mt-4 text-center md:h-20 ">
                        {renderTimeSlotContainers(["8:00 AM", "10:00 Am"])}
                    </div>
                </div>

                <div className="border p-4 mt-4 text-center rounded-md shadow">
                    <div className="flex justify-center items-center space-x-2">
                        <MdOutlineNightlightRound style={{ transform: 'rotate(-30deg)' }} />
                        <h2 className="text-lg font-bold">Evening Slots</h2>
                    </div>
                    <div className="flex flex-col  md:flex-row items-center justify-center md:items-center md:justify-center p-3 mt-4">
                        {renderTimeSlotContainers(["6:00 PM", "8:00 PM"])}
                    </div>
                </div>

                <Review
                    patientName="John Doe"
                    review="Great experience with Dr. John Doe. Highly recommended!"
                    date="January 15, 2023"
                />

                <Review
                    patientName="Jane Smith"
                    review="Excellent service and professional staff. Thank you, Dr. Doe!"
                    date="February 1, 2023"
                />
            </div>
    
    );
};

export default Book;

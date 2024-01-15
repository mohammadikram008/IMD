import React from "react";
import DoctorTags from "./Doctag";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MdStars } from "react-icons/md";
const doctorsData = [
    {
        id: 1,
        name: "Dr. Sara Rasul",
        image: "Doc.png",
        qualification: "MBBS, FCPS (Gynecology and Obstetrics)",
        totalReviews: "100%(18)",
        responseTime: "24h",
        experience: 10,
        practiceArea: "Cardiology",
        fee: "20$",
    },
    {
        id: 2,
        name: "Dr. John Doe",
        image: "1.png",
        qualification: "MBBS, MD",
        totalReviews: "100%(13)",
        responseTime: "24h",
        experience: 10,
        practiceArea: "Cardiology",
        fee: "20$",
    },
    {
        id: 3,
        name: "Dr. Jane Doe",
        image: "1.png",
        qualification: "MBBS, MD",
        totalReviews: "90%(11)",
        responseTime: "24h",
        experience: 10,
        practiceArea: "Cardiology",
        fee: "20$",
    },
    // Add more doctor data as needed
];

const DoctorCard = ({ name, image, qualification, totalReviews, responseTime, experience, practiceArea, fee }) => {
    return (
        <div className="OnlineDoc bg-white rounded-md p-9 md:p-9 lg:p-9 shadow-lg border  flex flex-col sm:flex-row  md:flex-col lg:flex-row   justify-between mb-9 ">
            <div className="flex">
                <div className="flex justify-start items-start ">

                    <img src={image} alt="Doctor" className=" w-full h-16 border-2 rounded-full mr-4" />
                </div>
                <div>
                    <div className='flex space-x-5  md:space-x-3 items-center  premium-div '>
                        {/* <RiStarLine /> */}
                        <h2 className="text-xl font-semibold mb-1">{name}</h2>
                        <MdStars size={32} className="" />
                        <div className='gold-gradient md:w-36 text-xs flex   items-center px-1 badge-bg'  >
                            <p className='p-2 text-xs' >PLATINIUM PROVIDER</p>
                        </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-1">{qualification}</p>
                    <p className="text-gray-600 text-sm mb-1">Satisfied Patients: {totalReviews}</p>
                    {/* <p className="text-gray-600 text-sm mb-1">Response Time: {responseTime}</p> */}
                    <div className="flex text-gray-600 ">
                        <div className=" p-3" style={{ borderRight: "1px solid #e5e5f0" }}>
                            <h1 className="font-bold text-lg  text-green-500 ">Under 15 mint</h1>
                            <h5>WAIT TIME</h5>
                        </div>

                        <div className="p-3" style={{ borderRight: "1px solid #e5e5f0" }}>
                            <h1 className="font-bold text-lg  text-green-500 ">
                                {experience} years</h1>
                            <h5>EXPERIENCE</h5>
                        </div>

                        <div className=" p-3" >
                            <h1 className="font-bold text-lg  text-green-500 ">
                                98% (542)</h1>
                            <h5>SATISFIED</h5>
                        </div>
                        {/* : {experience} years | Practice Area: {practiceArea} | Fee: {fee} */}
                    </div>
                    <div className="flex items-center justify-between mx-3 border-t border-b mt-2   border-gray-200">
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
            <div className="  rounded-md border-2 border-blue-500 h-32   mt-6 ">
                <h2 className="text-2xl font-bold p-3">Inetgrate medical Hospital DHA</h2>
                <div className=" flex justify-around ">
                    <p className="text-gray-600">Available on: Mon,31 August</p>
                    <p>Fee: $20</p>
                </div>
                <div className="bg-blue-500 rounded-b   text-white flex justify-center items-center h-8  mt-3  w-full  hover:bg-blue-700">
                    Pay online and get off to 50%
                </div>
            </div>
            <div className="flex mt-5 md:flex-col md:items-center md:justify-center items-center justify-center space-x-3 md:space-x-0 ">
                <Link to="/DoctorProfile">
                    <button className="border border-green-400 text-center text-black- px-12 w-52 py-2 md:mb-2 rounded-md hover:bg-blue-50 transition duration-300 ease-in-out">
                        View Profile
                    </button>
                </Link>
                <Link to="/Book">
                    <button className="background-gradient text-white px-8 py-2 rounded-md w-52 hover:bg-orange-400 transition duration-300 ease-in-out">
                        Book Appointment
                    </button>
                </Link>
            </div>
        </div>
    );
};

const OnlineDoc = () => {
    return (
        <div className="container  mx-auto mt-24 h-full md:mt-20 md:py-2 ">
            <h1 className="text-3xl font-bold mb-3 mt-4">Best 123 Doctors Available Near You</h1>

            <h2 className="mb-3">
                Also known as Female Health Specialist, ماہرِ اَمراضِ نِسواں, OB-GYN, Women Health Specialist, and
                Mahir-e-imraz-e-niswan
            </h2>
            <DoctorTags />
            {doctorsData.map((doctor) => (
                <DoctorCard
                    key={doctor.id}
                    name={doctor.name}
                    image={doctor.image}
                    qualification={doctor.qualification}
                    totalReviews={doctor.totalReviews}
                    responseTime={doctor.responseTime}
                    experience={doctor.experience}
                    practiceArea={doctor.practiceArea}
                    fee={doctor.fee}
                />
            ))}
        </div>
    );
};

export default OnlineDoc;

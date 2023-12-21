import React from "react";
import DoctorTags from "./Doctag";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

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

const DoctorCard = ({name, image, qualification, totalReviews, responseTime, experience, practiceArea, fee}) => {
    return (
        <div className="OnlineDoc bg-white rounded-md p-9 shadow-lg border  flex items-center justify-between mb-9">
            <div className="flex items-center">
                <img src={image} alt="Doctor" className="w-16 h-16 rounded-full mr-4" />
                <div>
                    <h2 className="text-xl font-semibold mb-1">{name}</h2>
                    <p className="text-gray-600 text-sm mb-1">{qualification}</p>
                    <p className="text-gray-600 text-sm mb-1">Satisfied Patients: {totalReviews}</p>
                    <p className="text-gray-600 text-sm mb-1">Response Time: {responseTime}</p>
                    <p className="text-gray-600 text-sm">
                        Experience: {experience} years | Practice Area: {practiceArea} | Fee: {fee}
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <Link to="/DoctorProfile">
                    <button className="border border-green-400 text-center text-black- px-12 py-2 mb-2 rounded-md hover:bg-blue-50 transition duration-300 ease-in-out">
                        View Profile
                    </button>
                </Link>
                <Link to="/Book">
                    <button className="bg-[#ff9e15] text-white px-8 py-2 rounded-md hover:bg-orange-400 transition duration-300 ease-in-out">
                        Book Appointment
                    </button>
                </Link>
            </div>
        </div>
    );
};

const OnlineDoc = () => {
    return (
        <div className="container mx-auto mt-10 h-full">
            <h1 className="text-3xl font-bold mb-3">Best 123 Doctors Available Near You</h1>

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

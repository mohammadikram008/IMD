import React, { useState } from "react";
import { MdStars } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { BsHospital } from "react-icons/bs";
import { FaClock } from "react-icons/fa6";
import {Link ,useNavigate } from 'react-router-dom'

const Review = ({ patientName, review, date }) => (
    <div className="border p-4 mt-4 rounded-md hover:shadow-md transition duration-300">
        <div className="mt-2">
            <p className="text-lg font-semibold">{patientName}</p>
            <p className="text-gray-600">{review}</p>
            <p className="text-gray-600">{date}</p>
        </div>
    </div>
);
const DoctorProfile = () => {
    const Navigate=useNavigate();
    const [openQuestion, setOpenQuestion] = useState(null);

    const data = [
        {
            question: 'What is the fee of Dr. Shakeel Ahmad & how do I pay?',
            answer: (
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 p-2">Location</th>
                            <th className="border border-gray-300 p-2">Fee</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 p-2">oladoc Care Video Consultation</td>
                            <td className="border border-gray-300 p-2">Rs. 1,000</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-2">National Hospital (Faisalabad)</td>
                            <td className="border border-gray-300 p-2">Rs. 1,000</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-2">Yaseen Memorial Hospital (Faisalabad)</td>
                            <td className="border border-gray-300 p-2">Rs. 1,000</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-2">Health 360</td>
                            <td className="border border-gray-300 p-2">Rs. 1,500</td>
                        </tr>
                    </tbody>
                </table>
            ),
        },
        { question: 'What is the experience of Dr.John Doe?', answer: 'Dr.John Doe Ahmad has 11 years of experience.' },
        { question: 'What is the feedback of Dr.John Doe?', answer: '100% users had a positive experience with Dr. Shakeel Ahmad.' },
        { question: 'What is the education of Dr.John Doe?', answer: 'Dr.John Doe Ahmad has the following degrees: MBBS, FCPS (Dermatology)' },

        // Add more questions and answers as needed
    ];

    const handleQuestionClick = (index) => {
        setOpenQuestion((prevIndex) => (prevIndex === index ? null : index));
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
    const generateTimeSlots = () => {
        const timeSlots = [];
        for (let i = 9; i <= 17; i++) {
            const startTime = `${i < 10 ? '0' : ''}${i}:00 AM`;
            const endTime = `${i < 9 ? '0' : ''}${i + 1}:00 PM`;
            timeSlots.push(`${startTime} - ${endTime}`);
        }
        return timeSlots;
    };
    // Sample data for the doctor
    const doctorData = {
        name: "Dr. John Doe",
        qualification: "MD, Cardiology",
        location: "New York, NY",
        pictureUrl: "Doc1.jpg",
        satisfactionPercentage: 85,
        behaviorsRating: 90,
        checkupRating: 85,
        consultationRating: 88,
        services: ["Acne Treatment (مہاسوں کا علاج)", "Alopecia (ایلوپیسیا)", "  Boil (بوائل)", " Chemical Peel (کیمیائی چھلکا)", " Dermal Fillers (ڈرمل فلرز)"],
        conditionsTreated: ["Acne", "Fever", "Diabetes", "High Blood Pressure", "Allergies"],
        education: "Medical School XYZ, Graduation Year: 2010",
        specialization: "Cardiology",
        experience: "10+ years of experience",
        about: `Dr. Shakeel Ahmad is a top Dermatologist with 11 years of experience. You can book an in-person appointment or an online video consultation with
         Dr. Shakeel Ahmad through oladoc.com or by calling at 0415068065. Experience  Dr. Shakeel Ahmad has over 11 years of experience in his field. Qualification  Dr. Shakeel Ahmad has the following qualifications: MBBS FCPS (Dermatology) Appointment Details In order  to book an appointment with Dr. Shakeel Ahmad you can call 0415068065 or click the Book Appointment button. You can also book an online video consultation with Dr. Shakeel Ahmad by clicking the Video Consultation button. Fees The fee for Dr. Shakeel Ahmad ranges from Rs. 1,000 - 1,500 for appointments. You can also book an online video consultation with him at an exclusive discount for just Rs. 500 through oladoc.Practice Locations Dr. Shakeel Ahmad is currently practicing at the following locations: oladoc Care Video Consultation Availability Days: M, Tu, W, Th, F Time: 07:00 PM - 08:00 PM National Hospital (Faisalabad) Availability Days: M, Tu, W, Th, F Time: 06:00 PM - 09:00 PM Yaseen Memorial Hospital (Faisalabad) Availability Days: Tu, Th Time: 07:00 PM - 09:00 PM Health 360 Availability Days: M, W, F Time: 03:00 PM - 05:00 PM Patient Feedback Dr. Shakeel Ahmad has a 100% patient satisfaction score with 158 verified patient reviews on oladoc.Services Offered Following are some of the services offered by Dr. Shakeel Ahmad:Acne Treatment Alopecia Boil  Chemical Peel  Dermal Fillers`,
    };
    const ServiceItem = ({ serviceName }) => <li className="text-gray-600">{serviceName}</li>;

    const ConditionItem = ({ conditionName }) => <li className="text-gray-600">{conditionName}</li>;
const handleChange=()=>{
    Navigate("/Book")
}
    return (
        <div className="relative bg-white mt-20 p-8 flex-col md:flex md:flex-row   items-start justify-center md:space-x-12  hover:border-gray-300 hover:shadow-lg transition duration-300 md:mt-20">
            <div className="flex flex-col overflow-auto justify-center items-center md:w-1/2">
                {/* <div className="mb-4 border rounded-md flex">
                    <div className="flex items-center">
                        <img className="w-24 h-24 rounded-full mr-6" src={doctorData.pictureUrl} alt="Doctor" />
                        <div>
                            <h2 className="text-3xl font-extrabold">{doctorData.name}</h2>
                            <p className="text-gray-600">{doctorData.qualification}</p>
                            <p className="text-gray-600">{doctorData.location}</p>
                        </div>
                    </div>
                    <div className="ml-6 text-center">
                        <p className="text-gray-600 text-sm mb-2 hover:text-blue-500">Satisfied Patients</p>
                        <div className="relative inline-block">
                            <div className="relative flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full hover:bg-blue-200 transition duration-300">
                                <span className="text-2xl font-semibold text-blue-600">
                                    {doctorData.satisfactionPercentage}%
                                </span>
                            </div>
                            <div className="absolute top-0 left-0 w-16 h-full border-t-4 border-blue-500 rounded-full"></div>
                        </div>
                    </div>
                </div> */}
                <div className="flex flex-col md:flex-row p-2 md:space-x-10 md:mt-10 border rounded-md w-full   md:p-10  ">
                    <div className="flex justify-center items-center md:justify-start md:items-start ">

                        <img src={doctorData.pictureUrl} alt="Doctor" className=" w-1/2  md:w-full  h-36 border-2 rounded-full mr-4" />
                    </div>
                    <div>
                        <div className='  premium-div  mt-5 md:mt-0 flex  space-x-4 md:space-x-16 items-center   '>
                            {/* <RiStarLine /> */}
                            <h2 className="text-xl font-semibold mb-1">{doctorData.name}</h2>
                            {/* <MdStars size={32} className="" /> */}
                            <div className='gold-gradient md:w-36 text-xs flex   items-center px-1 badge-bg'  >
                                <p className='p-2 text-xs' >PLATINIUM PROVIDER</p>
                            </div>
                        </div>

                        <p className="text-gray-600 text-sm mb-1">{doctorData.qualification}</p>
                        <p className="text-gray-600 text-sm mb-1">{doctorData.location}</p>
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
                        <div className="flex items-center justify-between mx-3 border-t border-b mt-2 md:mt-10   border-gray-200">
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

                <div className="mb-4 md:mt-20  mt-4   w-full ">
                    <div className="text-xl flex  font-semibold mb-2 space-x-4 justify-start items-center"> <MdStars size={32} className="" /> <h1>{doctorData.name} Reviews (158)</h1></div>
                    <div className="flex flex-col md:flex-row  w-full justify-around items-center mb-2 border p-5 md:p-5 md:mt-5  rounded-md" >
                        <div className=" text-center flex">

                            <div className="relative inline-block">
                                <div className="relative flex items-center justify-center w-16 h-16 bg-orange-400 rounded-full hover:bg-blue-200 transition duration-300">
                                    <span className="text-2xl font-semibold text-white">
                                        {doctorData.satisfactionPercentage}%
                                    </span>
                                </div>
                                <div className="absolute top-0 left-0 w-16 h-full border-t-4 border-gray-800 rounded-full"></div>
                            </div>
                            <p className="text-gray-600 text-sm mb-2 hover:text-blue-500 md:font-bold md:text-lg md:p-4">Satisfied Patients</p>
                        </div>
                        {/* <div className=" flex-col   ">
                            <p className="text-sm text-gray-500">Doctor Behaviors</p>
                            <p className="text-sm text-gray-500">Doctor Checkup</p>
                            <p className="text-sm text-gray-500">Doctor Overall Consultation</p>
                        </div> */}
                        <div>
                            <div className="relative pt-1 flex flex-col items-center md:flex-row  md:justify-between  md:space-x-3 ">
                                <div className="">
                                    <p className="text-sm text-gray-500">Doctor Behaviors</p>
                                </div>
                                <div className=" flex md:w-54 md:space-x-3">
                                    <div className="flex mb-2 items-center justify-center">
                                        <div className="w-48 bg-gray-200 rounded-full">
                                            <div
                                                className="h-2 rounded-full bg-[#232426]"
                                                style={{ width: `${doctorData.behaviorsRating}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                    <div className="flex mb-2 items-center justify-between">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#232426] ">
                                                {doctorData.behaviorsRating}%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative pt-1 flex flex-col items-center md:flex-row  justify-between  md:space-x-3 ">
                                <div className="">
                                    <p className="text-sm text-gray-500">Clinic Environment</p>
                                </div>
                                <div className=" flex md:w-54 md:space-x-3">
                                    <div className="flex mb-2 items-center justify-center">
                                        <div className="w-48 bg-gray-200 rounded-full">
                                            <div
                                                className="h-2 rounded-full bg-[#232426]"
                                                style={{ width: `${doctorData.behaviorsRating}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                    <div className="flex mb-2 items-center justify-between">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#232426] ">
                                                {doctorData.behaviorsRating}%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative pt-1 flex flex-col items-center md:flex-row  justify-between  md:space-x-3 ">
                                <div className="">
                                    <p className="text-sm text-gray-500">Staff Behaviour</p>
                                </div>
                                <div className=" flex md:w-54 md:space-x-3">
                                    <div className="flex mb-2 items-center justify-center">
                                        <div className="w-48 bg-gray-200 rounded-full">
                                            <div
                                                className="h-2 rounded-full bg-[#232426]"
                                                style={{ width: `${doctorData.behaviorsRating}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                    <div className="flex mb-2 items-center justify-between">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#232426] ">
                                                {doctorData.behaviorsRating}%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="mb-2 border rounded-md pl-3">
                            <p className="text-sm text-gray-500">Doctor Checkup</p>
                            <div className="relative pt-1">
                                <div className="flex mb-2 items-center justify-between">
                                    <div>
                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                                            {doctorData.checkupRating}%
                                        </span>
                                    </div>
                                </div>
                                <div className="flex mb-2 items-center justify-start">
                                    <div className="w-48 bg-gray-200 rounded-full">
                                        <div
                                            className="h-2 rounded-full bg-teal-500"
                                            style={{ width: `${doctorData.checkupRating}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-2 border rounded-md pl-3 ">
                            <p className="text-sm text-gray-500">Doctor Overall Consultation</p>
                            <div className="relative pt-1">
                                <div className="flex mb-2 items-center justify-between">
                                    <div>
                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                                            {doctorData.consultationRating}%
                                        </span>
                                    </div>
                                </div>
                                <div className="flex mb-2 items-center justify-start">
                                    <div className="w-48 bg-gray-200 rounded-full">
                                        <div
                                            className="h-2 rounded-full bg-teal-500"
                                            style={{ width: `${doctorData.consultationRating}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    <Review
                        patientName="John Doe"
                        review="Great experience with Dr. John Doe. Highly recommended!"
                        date="January 15, 2023"
                    />
                </div>
                <div className="flex flex-col md:flex-row md:p-5 w-full">
                    <div className="mb-4 flex flex-col    md:w-full  ">
                        <h3 className="text-xl font-semibold mb-2">Services</h3>

                        <ul className="list-disc pl-6 md:w-96 ">
                            {doctorData.services.map((service, index) => (
                                <ServiceItem key={index} serviceName={service} />
                            ))}
                        </ul>
                    </div>
                    <div className="mb-4 flex flex-col    md:w-full md:p-15 md:mx-3">
                        <h3 className="text-xl font-semibold mb-2">Conditions Treated</h3>
                        <ul className="list-disc pl-6 md:w-96">
                            {doctorData.conditionsTreated.map((condition, index) => (
                                <ConditionItem key={index} conditionName={condition} />
                            ))}
                        </ul>
                    </div>
                </div>
                {/* <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Education</h3>
                    <p className="text-gray-600">{doctorData.education}</p>
                </div>

                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Specialization</h3>
                    <p className="text-gray-600">{doctorData.specialization}</p>
                </div>

                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Experience</h3>
                    <p className="text-gray-600">{doctorData.experience}</p>
                </div>
*/}
                <div className="w-full md:p-5">

                    <div className="mb-4  md:m-10 md:mx-2  space-y-9">
                        <h3 className="text-xl font-semibold mb-2 space-y-4">About {doctorData.name}</h3>
                        {/* <p className="text-gray-600">{doctorData.about}</p> */}
                        <p>
                            Dr. Shakeel Ahmad is a top Dermatologist with 11 years of experience. You can book an in-person appointment or an online video consultation with Dr. Shakeel Ahmad through oladoc.com or by calling at 0415068065.
                        </p>

                        <p>
                            <strong className="font-bold md:mt-3 text-lg">Experience:</strong> Dr. Shakeel Ahmad has over 11 years of experience in his field.
                        </p>

                        <p>
                            <strong className="font-bold md:mt-3 text-lg"  >Qualification:</strong> Dr. Shakeel Ahmad has the following qualifications: MBBS FCPS (Dermatology)
                        </p>

                        <p>
                            <strong className="font-bold md:mt-3 text-lg"   >Appointment Details:</strong> In order to book an appointment with Dr. Shakeel Ahmad, you can call 0415068065 or click the Book Appointment button. You can also book an online video consultation with Dr. Shakeel Ahmad by clicking the Video Consultation button.
                        </p>

                        <p>
                            <strong className="font-bold md:mt-3 text-lg"   >Fees:</strong> The fee for Dr. Shakeel Ahmad ranges from Rs. 1,000 - 1,500 for appointments. You can also book an online video consultation with him at an exclusive discount for just Rs. 500 through oladoc.
                        </p>

                        <p>
                            <strong className="font-bold md:mt-3 text-lg">Practice Locations:</strong> Dr. Shakeel Ahmad is currently practicing at the following locations:
                        </p>

                        <ul>
                            <li>oladoc Care Video Consultation</li>
                            <li>National Hospital (Faisalabad)</li>
                            <li>Yaseen Memorial Hospital (Faisalabad)</li>
                            <li>Health 360</li>
                        </ul>

                        <p>
                            <strong className="font-bold md:mt-3 text-lg">Patient Feedback:</strong> Dr. Shakeel Ahmad has a 100% patient satisfaction score with 158 verified patient reviews on oladoc.
                        </p>

                        <h2>Services Offered</h2>

                        <p>
                            Following are some of the services offered by Dr. Shakeel Ahmad:
                        </p>

                        <ol className="list-decimal p-4" >
                            <li>Acne Treatment</li>
                            <li>Alopecia</li>
                            <li>Boil</li>
                            <li>Chemical Peel</li>
                            <li>Dermal Fillers</li>

                        </ol>
                    </div>
                </div>
                <div className="w-full md:p-5  ">
                    <h2 className="font-bold md:mt-3 text-lg">Frequently Asked Questions</h2>

                    {data.map((item, index) => (
                        <div key={index} className="mb-4">
                            <div
                                className="cursor-pointer "
                                onClick={() => handleQuestionClick(index)}
                            >
                                <h3 >{item.question}</h3>
                            </div>

                            {openQuestion === index && (
                                <div className="text-gray-700 mt-2">
                                    <p className="text-gray-500">{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="cards-div mt-12 md:mt-10  ">

                {/* card video information */}
                <div className="w-full mt-10   md:p-2 md:mt-0 md:w-96 mx-auto bg-white rounded-md overflow-hidden shadow-md">
                    {/* Top Right Image */}
                    <div className="flex items-center justify-around">
                        <FaVideo size={32} />
                        {/* <img
                            className="w-32 h-32 object-cover object-center"
                            src="your_image_url.jpg"
                            alt="Doctor"
                        /> */}
                        {/* Title */}
                        <div className="font-bold text-xl ">Dr. John Doe</div>
                        <p className="rainbow w-32 h-6 text-xs flex items-center justify-center">

                            Save fuel and time!
                        </p>
                    </div>


                    <div className=" ">


                        {/* Fees */}
                        <div className="text-gray-700 text-base  flex items-center justify-around w-full mt-3 border-b-2 p-2">
                            <h1>Fees:</h1> <p>$100 - $150</p>
                        </div>

                        {/* Address */}
                        <div className="text-gray-700 text-base mb-2 flex items-center justify-around w-full mt-3   border-b-2 p-2">
                            <h1> Address:</h1> <p> Use phone/laptop </p>
                        </div>
                        {/* Available Time */}
                        {/* <div className="text-gray-700 text-base mb-2 flex items-center justify-around w-72 mt-3">
                            <h1> Available Time:</h1> <p>Mon-Fri, 9 AM - 5 PM</p>
                        </div> */}
                        <div className="text-gray-700 text-base mb-2 flex items-center justify-around w-full   " onClick={toggleDropdown}>
                            <span className="flex justify-center items-center space-x-2"><FaClock /> <h1>Available Time</h1></span>  <span> {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                        </div>

                        {isDropdownOpen && (
                            <ul className="text-gray-700 text-base p-4 mb-4 transition-all duration-300">
                                {weekDays.map((day, index) => (
                                    <li key={index} className="flex">
                                        {day}: <p className="mx-3"> 9:00 AM - 5:00 PM</p>
                                    </li>
                                ))}
                            </ul>
                        )}



                    </div>

                    {/* Booking Button */}
                    <div className="px-6 py-4 w-full">
                        <button className="bg-blue-500 flex hover:bg-blue-700 text-white font-bold py-2 px-4 w-full justify-center items-center rounded "    onClick={()=>handleChange()}>
                        
                            <FaVideo size={22} />   <p className="md:mx-4">Book Appointment</p>
                        
                        </button>
                    </div>
                </div>

                {/* card of hospital information */}
                <div className="w-full mt-10   md:w-96 mx-auto bg-white rounded-md overflow-hidden shadow-md md:mt-12">
                    {/* Top Right Image */}
                    <div className="flex items-center justify-around">
                        <BsHospital size={32} />
                        {/* <img
                            className="w-32 h-32 object-cover object-center"
                            src="your_image_url.jpg"
                            alt="Doctor"
                        /> */}
                        {/* Title */}
                        <div className="font-bold text-xl mb-2">National Hospital (Faisalabad)</div>
                    </div>


                    <div className="px-6 py-4">


                        {/* Fees */}
                        <div className="text-gray-700 text-base mb-2 flex items-center justify-around w-full mt-3 border-b-2 p-2">
                            <h1>Fees:</h1> <p>$100 - $150</p>
                        </div>

                        {/* Address */}
                        <div className="text-gray-700 text-base mb-2 flex items-center justify-around w-full mt-3   border-b-2 p-2">
                            <h1> Address:</h1> <p>  Yaseen Memorial Hospital
                            </p>
                        </div>
                        {/* Available Time */}
                        {/* <div className="text-gray-700 text-base mb-2 flex items-center justify-around w-72 mt-3">
                            <h1> Available Time:</h1> <p>Mon-Fri, 9 AM - 5 PM</p>
                        </div> */}
                        <div className="text-gray-700 text-base mb-2 flex items-center justify-around w-full   " onClick={toggleDropdownHos}>
                            <span className="flex justify-center items-center space-x-2"><FaClock /> <h1>Available Time</h1></span>  <span> {isDropdownOpenHos ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                        </div>

                        {isDropdownOpenHos && (
                            <ul className="text-gray-700 text-base p-4 mb-4 transition-all duration-300">
                                {weekDays.map((day, index) => (
                                    <li key={index} className="flex">
                                        {day}: <p className="mx-3"> 9:00 AM - 5:00 PM</p>
                                    </li>
                                ))}
                            </ul>
                        )}



                    </div>

                    {/* Booking Button */}
                    <div className="px-6 py-4 w-full">
                        <button className="bg-orange-400 flex hover:bg-blue-700 text-white font-bold py-2 px-4 w-full justify-center items-center rounded ">
                            <p className="md:mx-4">Book Appointment</p>
                        </button>
                    </div>
                </div>
                {/* card of hospital information */}
                <div className="w-full mt-10   md:w-96 mx-auto bg-white rounded-md overflow-hidden shadow-md md:mt-12">
                    {/* Top Right Image */}
                    <div className="flex items-center justify-around">
                        <BsHospital size={32} />
                        {/* <img
                            className="w-32 h-32 object-cover object-center"
                            src="your_image_url.jpg"
                            alt="Doctor"
                        /> */}
                        {/* Title */}
                        <div className="font-bold text-xl mb-2">Health 360</div>
                    </div>


                    <div className="px-6 py-4">


                        {/* Fees */}
                        <div className="text-gray-700 text-base mb-2 flex items-center justify-around w-full mt-3 border-b-2 p-2">
                            <h1>Fees:</h1> <p>$100 - $150</p>
                        </div>

                        {/* Address */}
                        <div className="text-gray-700 text-base mb-2 flex items-center justify-around w-full mt-3   border-b-2 p-2">
                            <h1> Address:</h1> <p>  Yaseen Memorial Hospital
                            </p>
                        </div>
                        {/* Available Time */}
                        {/* <div className="text-gray-700 text-base mb-2 flex items-center justify-around w-72 mt-3">
                            <h1> Available Time:</h1> <p>Mon-Fri, 9 AM - 5 PM</p>
                        </div> */}
                        <div className="text-gray-700 text-base mb-2 flex items-center justify-around w-full   " onClick={toggleDropdownHos}>
                            <span className="flex justify-center items-center space-x-2"><FaClock /> <h1>Available Time</h1></span>  <span> {isDropdownOpenHos ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                        </div>

                        {isDropdownOpenHos && (
                            <ul className="text-gray-700 text-base p-4 mb-4 transition-all duration-300">
                                {weekDays.map((day, index) => (
                                    <li key={index} className="flex">
                                        {day}: <p className="mx-3"> 9:00 AM - 5:00 PM</p>
                                    </li>
                                ))}
                            </ul>
                        )}



                    </div>

                    {/* Booking Button */}
                    <div className="px-6 py-4 w-full">

                        <button className="bg-orange-400 flex hover:bg-blue-700 text-white font-bold py-2 px-4 w-full justify-center items-center rounded ">
                            <p className="md:mx-4">Book Appointment</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorProfile;

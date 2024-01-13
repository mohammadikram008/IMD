import React from "react";
import Slider from '../Layout/DoctorAppointmentSlider'
const OnlineDoctors = () => {
    const doctors = [
        {
            name: "Ms. Akeena",
            feild: "Dermatologist",
            date: "Mon 11-2023",
            appointment: "10:00 AM - 11:00 AM",
            imageUrl:
                "https://static.vecteezy.com/system/resources/previews/024/724/498/non_2x/asian-young-woman-doctor-with-stethoscope-in-uniform-smiling-isolated-on-transparent-medical-concept-generative-ai-png.png",
        },
        {
            name: "Ms. Jospeh",
            feild: "Gynecologist",
            
            date: "Wed 17-2023",
            appointment: "12:00 AM - 12:15 AM",
            imageUrl:  "https://www.seekpng.com/png/full/207-2070753_doctor-png-file-download-free-doctor-transparent.png",
        },
        {
            name: "Ms. Akeena",
            feild: "Urologist",
            date: "Mon 11-2023",
            appointment: "10:00 AM - 11:00 AM",
            imageUrl:
                "https://static.vecteezy.com/system/resources/previews/024/724/498/non_2x/asian-young-woman-doctor-with-stethoscope-in-uniform-smiling-isolated-on-transparent-medical-concept-generative-ai-png.png",
        },
        {
            name: "Ms. Jospeh",
            feild: "Gynecologist",
            
            date: "Wed 17-2023",
            appointment: "12:00 AM - 12:15 AM",
            imageUrl:  "https://www.seekpng.com/png/full/207-2070753_doctor-png-file-download-free-doctor-transparent.png",
        },
        {
            name: "Dr. John Doe",
            feild: "ENT Specialist",
            date: "Fri 19-2023",
            appointment: "04:00 AM - 04:15 AM",
            imageUrl:
                "https://www.seekpng.com/png/full/207-2070753_doctor-png-file-download-free-doctor-transparent.png",
        },
        {
            name: "Dr. John Doe",
            feild: "Psychiatrist  ",
            date: "Fri 19-2023",
            appointment: "04:00 AM - 04:15 AM",
            imageUrl:
                "https://www.seekpng.com/png/full/207-2070753_doctor-png-file-download-free-doctor-transparent.png",
        },
        {
            name: "Dr. John Doe",
            feild: "Dentist",
            date: "Fri 19-2023",
            appointment: "04:00 AM - 04:15 AM",
            imageUrl:
                "https://www.seekpng.com/png/full/207-2070753_doctor-png-file-download-free-doctor-transparent.png",
        },
        // Add more doctors as needed
    ];
    return (
       
        <div className="bg-gray-100 p-4 sm:p-8  md:mx-16 ">
        <h1 className="text-3xl mb-4 sm:mb-8 flex justify-start">Top Rated Specialists </h1>
           <div className="">
            
             <Slider data={doctors} />
            </div>
           
        </div>
    );
};
export default OnlineDoctors;

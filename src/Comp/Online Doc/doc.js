import React from "react";
const OnlineDoctors = () => {
    const doctors = [
        {
            name: "Ms. Akeena",
            age: 25,
            date: "Mon 11-2023",
            appointment: "10:00 AM - 11:00 AM",
            imageUrl:
                "https://static.vecteezy.com/system/resources/previews/024/724/498/non_2x/asian-young-woman-doctor-with-stethoscope-in-uniform-smiling-isolated-on-transparent-medical-concept-generative-ai-png.png",
        },
        {
            name: "Ms. Jospeh",
            age: 32,
            date: "Wed 17-2023",
            appointment: "12:00 AM - 12:15 AM",
            imageUrl: "https://pngimg.com/uploads/doctor/doctor_PNG16043.png",
        },
        {
            name: "Dr. John Doe",
            age: 35,
            date: "Fri 19-2023",
            appointment: "04:00 AM - 04:15 AM",
            imageUrl:
                "https://www.seekpng.com/png/full/207-2070753_doctor-png-file-download-free-doctor-transparent.png",
        },
        {
            name: "Dr. John Doe",
            age: 35,
            date: "Fri 19-2023",
            appointment: "04:00 AM - 04:15 AM",
            imageUrl:
                "https://www.seekpng.com/png/full/207-2070753_doctor-png-file-download-free-doctor-transparent.png",
        },
        {
            name: "Dr. John Doe",
            age: 35,
            date: "Fri 19-2023",
            appointment: "04:00 AM - 04:15 AM",
            imageUrl:
                "https://www.seekpng.com/png/full/207-2070753_doctor-png-file-download-free-doctor-transparent.png",
        },
        // Add more doctors as needed
    ];
    return (
        <div>
            <h1 className="text-3xl sm:mb-8 flex justify-center">Your Appointments </h1>
            <div className="flex overflow-x-auto">
                {doctors.map((doctor, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 m-4 p-6 bg-[#5EEF8F] rounded-lg text-white relative w-96 hover:bg-green-600"
                    >
                        <div className="mb-4">
                            <h2 className="text-lg font-bold">{doctor.name}</h2>
                            <p>{`Age: ${doctor.age}`}</p>
                            <p>{`Date: ${doctor.date}`}</p>
                        </div>
                        <div className="border rounded-md bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg p-4">
                            <p className="font-bold">Appointment</p>
                            <p>{doctor.appointment}</p>
                        </div>
                        <div className="absolute top-0 right-0 bottom-0 overflow-hidden">
                            <img
                                src={doctor.imageUrl}
                                alt={doctor.name}
                                className="object-cover transition duration-300 ease-in-out transform hover:scale-105"
                                style={{width: "100%", height: "100%"}}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default OnlineDoctors;

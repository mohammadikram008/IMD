import React from "react";

const Review = ({patientName, review, date}) => (
    <div className="border p-4 mt-4 rounded-md hover:shadow-md transition duration-300">
        <div className="mt-2">
            <p className="text-lg font-semibold">{patientName}</p>
            <p className="text-gray-600">{review}</p>
            <p className="text-gray-600">{date}</p>
        </div>
    </div>
);
const DoctorProfile = () => {
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
        services: ["Cardiology", "Dermatology", "Internal Medicine", "Pediatrics", "Orthopedics"],
        conditionsTreated: ["Acne", "Fever", "Diabetes", "High Blood Pressure", "Allergies"],
        education: "Medical School XYZ, Graduation Year: 2010",
        specialization: "Cardiology",
        experience: "10+ years of experience",
        about: "Dr. John Doe is a highly skilled and experienced cardiologist specializing in the diagnosis and treatment of heart-related conditions.",
    };
    const ServiceItem = ({serviceName}) => <li className="text-gray-600">{serviceName}</li>;

    const ConditionItem = ({conditionName}) => <li className="text-gray-600">{conditionName}</li>;

    return (
        <div className="bg-white p-8 flex items-center pl-36 hover:border-gray-300 hover:shadow-lg transition duration-300">
            <div className="flex-1">
                <div className="mb-4 border rounded-md flex">
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
                </div>

                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Rating Breakdown</h3>
                    <div className="mb-2 border pl-4">
                        <p className="text-sm text-gray-500">Doctor Behaviors</p>
                        <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                                <div>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                                        {doctorData.behaviorsRating}%
                                    </span>
                                </div>
                            </div>
                            <div className="flex mb-2 items-center justify-start">
                                <div className="w-48 bg-gray-200 rounded-full">
                                    <div
                                        className="h-2 rounded-full bg-teal-500"
                                        style={{width: `${doctorData.behaviorsRating}%`}}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-2 border rounded-md pl-3">
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
                                        style={{width: `${doctorData.checkupRating}%`}}
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
                                        style={{width: `${doctorData.consultationRating}%`}}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Review
                        patientName="John Doe"
                        review="Great experience with Dr. John Doe. Highly recommended!"
                        date="January 15, 2023"
                    />
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Services</h3>
                    <ul className="list-disc pl-6">
                        {doctorData.services.map((service, index) => (
                            <ServiceItem key={index} serviceName={service} />
                        ))}
                    </ul>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Conditions Treated</h3>
                    <ul className="list-disc pl-6">
                        {doctorData.conditionsTreated.map((condition, index) => (
                            <ConditionItem key={index} conditionName={condition} />
                        ))}
                    </ul>
                </div>
                <div className="mb-4">
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

                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">About</h3>
                    <p className="text-gray-600">{doctorData.about}</p>
                </div>
            </div>
        </div>
    );
};

export default DoctorProfile;

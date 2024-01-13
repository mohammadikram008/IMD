import React, {useRef} from "react";
import Slider from '../Layout/DoctorConcernSlider'
const DoctorBox = ({specialist, icon}) => {
    const handleClick = () => {
        // Add your click logic here
        console.log(`Clicked on ${specialist}`);
    };

    return (
        <div
            className="doct-conrn-list  bg-white rounded-lg p-4  shadow-md     cursor-pointer transition-transform  hover:scale-105 text-center"
            onClick={handleClick}
            
        >
            <div className="rounded-full bg-gray-300 h-12 w-12 flex items-center justify-center mx-auto mb-4">
                {icon}
            </div>
            <h3 className="text-lg font-semibold mb-1">{specialist}</h3>
        </div>
    );
};

const doctorsData = [
    {specialist: "Heart Specialist", icon: "❤️"},
    {specialist: "Neurologist", icon: "🧠"},
    {specialist: "Eye Specialist", icon: "👁"},
    {specialist: "Dentist", icon: "🦷"},
    {specialist: "Gynecology", icon: "🤰"},
    {specialist: "Orthopedic", icon: "🩺"},
    {specialist: "Urology", icon: "🚽"},
    {specialist: "Ophthalmology", icon: "👀"},
    {specialist: "Pediatric", icon: "👶"},
    {specialist: "Skin Specialist", icon: "🧑🏽"},
    {specialist: "Gastroenterology", icon: "🍤"},
    {specialist: "General", icon: "🔍"},
    // Add more doctors as needed
];

const Doctors = () => {
    const scrollContainerRef = useRef();

    const handleScroll = () => {
        const container = scrollContainerRef.current;

        // If the container has scrolled to the end, reset to the beginning
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
            container.scrollLeft = 0;
        } else {
            // Otherwise, scroll to the next position
            container.scrollLeft += container.clientWidth;
        }
    };

    return (
        <div className="bg-gray-100 p-4 sm:p-8 md:mx-16 md:mt-16 " style={{marginBottom:'-10rem'}}>
            <h1 className="text-3xl mb-4 sm:mb-8 flex justify-start">Choose Doctors by Concern</h1>
            <Slider data={doctorsData} />
            {/* <div ref={scrollContainerRef} className="flex overflow-x-auto scrolling-container" onClick={handleScroll}>
                {doctorsData.map((doctor, index) => (
                    <DoctorBox key={index} {...doctor} />
                ))}
            </div> */}
        </div>
    );
};

export default Doctors;

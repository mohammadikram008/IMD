import React, {useState} from "react";
import {BsCaretLeftFill, BsCaretRightFill} from "react-icons/bs";

const Review = ({patientName, review, date}) => (
    <div className="border p-4 mt-4 rounded-md">
        <div className="mt-2">
            <p className="text-lg font-semibold">{patientName}</p>
            <p className="text-gray-600">{review}</p>
            <p className="text-gray-600">{date}</p>
        </div>
    </div>
);

const Book = () => {
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
                <div key={day} className="flex-shrink-0 mr-5">
                    <div
                        className={`date-container rounded-full p-4 border cursor-pointer h-44 w-24 text-3xl ${
                            isSelected ? "bg-green-500 text-white" : "border-black"
                        }`}
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
                className={`time-slot-container rounded-3xl p-4 border cursor-pointer h-15 w-40 text-lg text-center ${
                    selectedTimeSlot === timeSlot ? "bg-green-500 text-white text-center" : "border-black"
                }`}
                onClick={() => handleTimeSlotClick(timeSlot)}
                style={{margin: "0 0.5rem"}}
            >
                {timeSlot}
            </div>
        ));
    };

    return (
        <div className="container mx-auto p-8">
            <div className="border p-4 flex items-center rounded-md">
                <img src="Doc1.jpg" alt="Doctor's avatar" className="w-16 h-16 rounded-full mr-4" />
                <div>
                    <h2 className="text-lg font-bold">Assist. Prof. Dr. Maryam Raana</h2>
                    <p className="text-gray-600">Islamabad Diagnostic Center (IDC) (JailRoad) </p>
                    <p className="text-gray-600">Fee: 1000</p>
                </div>
            </div>

            <div className="border p-4 mt-4 rounded-md">
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

            <div className="border p-4 mt-4 rounded-md">
                {/* <h2 className="text-lg font-bold">Choose Date</h2> */}
                <div className="flex items-center justify-between">
                    <button onClick={decrementMonth} className="btn-icon">
                        <BsCaretLeftFill />
                    </button>
                    <div className="overflow-x-auto whitespace-nowrap">
                        <div className="flex">{renderDateContainers()}</div>
                    </div>
                    <button onClick={incrementMonth} className="btn-icon">
                        <BsCaretRightFill />
                    </button>
                </div>
            </div>

            <div className="border p-4 mt-4 text-center rounded-md">
                <h2 className="text-lg font-bold">Morning Slots</h2>
                <div className="flex items-center justify-center mt-4 text-center">
                    {renderTimeSlotContainers(["8am", "10am"])}
                </div>
            </div>

            <div className="border p-4 mt-4 text-center rounded-md">
                <h2 className="text-lg font-bold">Evening Slots</h2>
                <div className="flex items-center justify-center p-3 mt-4">
                    {renderTimeSlotContainers(["6pm", "8pm"])}
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

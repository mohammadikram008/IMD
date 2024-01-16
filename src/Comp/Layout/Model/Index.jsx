import React, { Fragment, useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Input, Label, FormGroup, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { createPortal } from 'react-dom';
import { Transition } from 'react-transition-group';
const Index = ({ isOpen, toggle }) => {

    const [bookingType, setBookingType] = useState("");
    const [gender, setGender] = useState("");
    const [patientAge, setPatientAge] = useState("");
    const [description, setDescription] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleBookingTypeChange = (e) => {
        setBookingType(e.target.value);
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handlePatientAgeChange = (e) => {
        setPatientAge(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    // const handleButtonClick = () => {
    //   // Handle the button click logic here
    //   console.log("Booking Type:", bookingType);
    //   console.log("Gender:", gender);
    //   console.log("Patient Age:", patientAge);
    //   console.log("Description:", description);
    //   console.log("Payment Method:", paymentMethod);

    //   // You can add additional logic or send data to an API, etc.

    //   // Close the modal
    //   toggle();
    // };

    // const toggleDropdown = () => {
    //   setDropdownOpen(!dropdownOpen);
    // };

    // return (
    //   <Modal isOpen={isOpen} toggle={toggle}>
    //     <ModalHeader toggle={toggle}>Custom Modal</ModalHeader>
    //     <ModalBody>
    //       <FormGroup>
    //         <p for="bookingType">Booking Type</p>
    //       <input type="select" name="bookingType" id="bookingType" value={bookingType} onChange={handleBookingTypeChange}>
    //           <option value="">Select Booking Type</option>
    //           <option value="self">Self</option>
    //           <option value="other">Other</option>
    //           <option value="friend">Friend</option>
    //        </input>
    //       </FormGroup>

    //       <FormGroup>
    //         <p for="gender">Gender</p>
    //       <input type="select" name="gender" id="gender" value={gender} onChange={handleGenderChange}>
    //           <option value="">Select Gender</option>
    //           <option value="male">Male</option>
    //           <option value="female">Female</option>
    //           <option value="other">Other</option>
    //        </input>
    //       </FormGroup>

    //       <FormGroup>
    //         <p for="patientAge">Patient Age</p>
    //       <input type="select" name="patientAge" id="patientAge" value={patientAge} onChange={handlePatientAgeChange}>
    //           <option value="">Select Age</option>
    //           {[...Array(100)].map((_, i) => (
    //             <option key={i} value={i + 1}>
    //               {i + 1}
    //             </option>
    //           ))}
    //        </input>
    //       </FormGroup>

    //       <FormGroup>
    //         <p for="description">Description</p>
    //       <input type="textarea" name="description" id="description" value={description} onChange={handleDescriptionChange} />
    //       </FormGroup>

    //       <FormGroup>
    //         <p for="paymentMethod">Payment Method</p>
    //         <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
    //           <DropdownToggle caret>
    //             {paymentMethod ? paymentMethod : "Select Payment Method"}
    //           </DropdownToggle>
    //           <DropdownMenu>
    //             <DropdownItem onClick={() => setPaymentMethod("Visa")}>Visa</DropdownItem>
    //             <DropdownItem onClick={() => setPaymentMethod("MasterCard")}>MasterCard</DropdownItem>
    //             <DropdownItem onClick={() => setPaymentMethod("PayPal")}>PayPal</DropdownItem>
    //           </DropdownMenu>
    //         </Dropdown>
    //       </FormGroup>
    //     </ModalBody>
    //     <ModalFooter>
    //       <Button color="primary" onClick={handleButtonClick}>
    //         Submit
    //       </Button>{" "}
    //       <Button color="secondary" onClick={toggle}>
    //         Cancel
    //       </Button>
    //     </ModalFooter>
    //   </Modal>
    // );
    const [isEntered, setIsEntered] = useState(false);

    const duration = 300;

    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
        pointerEvents: 'none',
    };

    const transitionStyles = {
        entering: { opacity: 0 },
        entered: { opacity: 1, pointerEvents: 'auto' },
        exiting: { opacity: 0 },
        exited: { opacity: 0, pointerEvents: 'none' },
    };

    const handleEnter = () => {
        setIsEntered(true);
    };

    const handleExit = () => {
        setIsEntered(false);
    };

    return (
        <Transition in={isOpen} timeout={duration} onEnter={handleEnter} onExit={handleExit} >
            {(state) => (
                <div
                    style={{
                        ...defaultStyle,
                        ...transitionStyles[state],
                    }}
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
                >
                    <div className="bg-white md:w-1/2 p-8  flex flex-col justify-center items-center rounded shadow-md">
                        <div className="mb-10 flex justify-center items-center ">
                            <h2 className="text-xl font-bold">Paitent Details</h2>
                        </div>
                        <div className=' w-full flex justify-center items-center'>
                            <div className="mb-4 flex flex-col p-5 space-y-2 md:w-1/2  ">

                                <div className='  flex flex-col'>


                                    <label htmlFor="bookingType">Booking Type</label>
                                    <select className='border mt-2 p-3 text-center rounded-full' name="bookingType" id="bookingType" value={bookingType} onChange={handleBookingTypeChange}>
                                        <option value="">Select Booking Type</option>
                                        <option value="self">Self</option>
                                        <option value="other">Other</option>
                                        <option value="friend">Friend</option>
                                    </select>
                                </div>
                                <label htmlFor="gender">Gender</label>
                                <select name="gender" id="gender" value={gender} onChange={handleGenderChange}>
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>

                                <label htmlFor="patientAge">Patient Age</label>
                                <select name="patientAge" id="patientAge" value={patientAge} onChange={handlePatientAgeChange}>
                                    <option value="">Select Age</option>
                                    {[...Array(100)].map((_, i) => (
                                        <option key={i} value={i + 1}>
                                            {i + 1}
                                        </option>
                                    ))}
                                </select>

                                <label htmlFor="description">Description</label>
                                <textarea name="description" id="description" value={description} onChange={handleDescriptionChange} />

                                {/* Uncomment the following code if you want to use reactstrap Dropdown */}
                                {/* <label htmlFor="paymentMethod">Payment Method</label>
    <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
        <DropdownToggle caret>
            {paymentMethod ? paymentMethod : "Select Payment Method"}
        </DropdownToggle>
        <DropdownMenu>
            <DropdownItem onClick={() => setPaymentMethod("Visa")}>Visa</DropdownItem>
            <DropdownItem onClick={() => setPaymentMethod("MasterCard")}>MasterCard</DropdownItem>
            <DropdownItem onClick={() => setPaymentMethod("PayPal")}>PayPal</DropdownItem>
        </DropdownMenu>
    </Dropdown> */}
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                onClick={toggle}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </Transition>

    );
}

export default Index
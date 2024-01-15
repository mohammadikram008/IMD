import React from 'react'
import shape_39 from '../assets/images/sh39.png'
import shape_42 from '../assets/images/sh42.png'
const Footer = () => {
    return (
        <div>
            <footer className=" bg-[#1a2332] text-white  md:h-full md:p-16  ">
                  
                <div className="container mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-center p-16 md:p-0">
                    {/* ... Content for each column ... */}

                    <div className="hidden md:flex md:flex-col col-span-1 ">
                        <img src="/Logo Imd.png" alt="Your Logo" className="mb-4 w-24 " />
                        <p>Your company description goes here.</p>
                    </div>

                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Listing</li>
                            <li>How It Works</li>
                            <li>Our Services</li>
                            <li>Our Blog</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>


                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
                        <ul>
                            <li>Specialist</li>
                            <li>Clinic</li>
                            <li>Hospital</li>
                            <li>Download App</li>
                            <li>Join as a Doctor</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>


                    <div className="col-span-2 mt-6 md:col-span-1 flex flex-col justify-center items-center">
                        <h3 className="text-lg font-semibold mb-4">Contacts</h3>
                        <p>Flat 20, Reynolds Neck, North Helenaville, FV77 8WS</p>
                        <p>+2(305) 587-3407</p>
                        <p>info@example.com</p>
                    </div>
                </div>

                <div className=" container mx-auto mt-16 ">
                  

                        {/* <img src={shape_39} alt="Top Left Image" className="absolute top-0 left-0 z-0" />
                        <img src={shape_42} alt="Top Right Image" className="absolute top-0 right-0" /> */}
                        <p className="text-center mt-8">Docpro © 2020 All Right Reserved</p>
                        <p className="text-center">Terms of Service | Privacy Policy</p>
                
                </div>
            </footer>
            {/* <div className=" bg-gray-900"> */}
            {/* <div className="w-full flex justify-center items-center  text-white py-10"> */}
            {/* <div className='flex justify-center items-center p-12 '>

                        <div className='flex-col p-6 w-96'>
                            <img
                                src="/Logo Imd.png"
                                alt="Logo"
                                className={`mb-2 sm:mr-2 h-12 pl-5 hover:rotate-1`}

                            />
                            <p>Book appointments with the best Doctors and Specialists such as Gynecologists, Skin Specialists, Child Specialists, Surgeons, etc. Avail test services such as MRI, CT scan, Ultrasound, X-Ray, etc. and Online Doctor Video Consultations all across Pakistan conveniently.

                            </p>
                            <ul className='mt-5 footer-ul'>
                                <h2>Company</h2>
                                <li> Home</li>
                                <li> Privacy policy</li>
                                <li>  About us</li>
                                <li>  Contact us</li>
                                <li>  FAQs</li>
                            </ul>
                        </div>

                        <div className='flex justify-end items-end'>
                            <div className="flex-col justify-end items-end my-10">
                                <div className="flex items-center border  rounded-lg px-4 py-2 w-52 mx-2">
                                    <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 md:w-8" />
                                    <div className="text-left ml-3">
                                        <p className='text-xs text-gray-200'>Download on </p>
                                        <p className="text-sm md:text-base"> Google Play Store </p>
                                    </div>
                                </div>
                                <div className="flex items-center border  rounded-lg px-4 py-2  mx-2 w-52 mt-7">
                                    <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 md:w-8" />
                                    <div className="text-left ml-3">
                                        <p className='text-xs text-gray-200'>Download on </p>
                                        <p className="text-sm md:text-base"> Apple Store </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
            {/* <div className="text-center">
            <h3 className="text-3xl mb-3"> Stay Connected Choose your Doctors </h3>
            <p> Stay fit. All day, every day. </p>
            <div className="flex justify-center my-10">
                <div className="flex items-center border  rounded-lg px-4 py-2 w-52 mx-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 md:w-8"/>
                    <div className="text-left ml-3">
                        <p className='text-xs text-gray-200'>Download on </p>
                        <p className="text-sm md:text-base"> Google Play Store </p>
                    </div>
                </div>
                <div className="flex items-center border  rounded-lg px-4 py-2 w-44 mx-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 md:w-8"/>
                    <div className="text-left ml-3">
                        <p className='text-xs text-gray-200'>Download on </p>
                        <p className="text-sm md:text-base"> Apple Store </p>
                    </div>
                </div>
            </div>
        </div> */}
            {/* <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy;All Rights Reserved, 2023. </p>
            <div className="order-1 md:order-2">
                <span className="px-2">About us</span>
                <span className="px-2 border-l">Contact us</span>
                <span className="px-2 border-l">Privacy Policy</span>
            </div>
        </div> */}
            {/* </div> */}
            {/* </div> */}

        </div>
    )
}

export default Footer
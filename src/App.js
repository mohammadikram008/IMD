import React from "react";
import Homepage from "./Comp/Header/Homepage";
import Login from "./Comp/User Login-Reg/Login";
import {BrowserRouter, Routes, Route,Switch } from "react-router-dom";
import Reg from "./Comp/User Login-Reg/Registeruser";
import Page404 from "./Comp/page404/Page404";
import OnlineDoc from "./Comp/OnlineDocAva/OnlineDoc";
import Book from "./Comp/Booking/Book";
import DoctorProfile from "./Comp/ProfileDR/DoctorProfile";
import Navbar from './Comp/Navbar/Navbar'
import Footer from "./Comp/Footer";
function App() {
    return (
        <div className="">
      
            <Navbar/>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/Reg" element={<Reg />} />
                    <Route path="*" element={<Page404 />} />
                    <Route path="/Homepage" element={<Homepage />} />
                    <Route path="/OnlineDoc" element={<OnlineDoc />} />
                    <Route path="/Book" element={<Book />} />
                    <Route path="/DoctorProfile" element={<DoctorProfile />} />
                </Routes>
                <Footer />
         
        </div>
    );
}

export default App;

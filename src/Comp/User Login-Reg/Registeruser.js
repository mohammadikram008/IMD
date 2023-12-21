import React, {useState} from "react";
import {Link} from "react-router-dom";

function Reg() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRegister = () => {
        // Add your registration logic here, e.g., sending a request to your server for registration.
        // For this example, we'll just display the entered name, email, and password.
        console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-900">
            <div className="w-full max-w-md p-6 rounded-lg bg-white shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Login Doctor</h2>
                {/* <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div> */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
                        Email
                    </label>
                    <input
                        placeholder="Username or Email"
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        className="w-full p-3 border border-gray-300 rounded-3xl focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
                        Password
                    </label>
                    <input
                        placeholder="Enter your Password"
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="w-full p-3 border border-gray-300 rounded-3xl focus:outline-none focus:border-blue-500"
                    />
                </div>
                <Link to={"/Homepage"}>
                    <button
                        className="w-full bg-[#5EEF8F] text-white p-3 rounded-3xl hover:shadow-lg"
                        onClick={handleRegister}
                    >
                        Login
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Reg;

import React, {useState} from "react";
import {Link} from "react-router-dom";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        console.log(`Email: ${email}, Password: ${password}`);
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-900">
            <div className="w-full max-w-md p-6 rounded-xl bg-gray-100 shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Login</h2>
                <div className="mb-4 ">
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
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </Link>
                <p className="mt-4 text-gray-600 text-sm text-center">
                    Login as Doctor?{" "}
                    <Link to={"/Reg"}>
                        <a href="/Registeruser" className="text-[#ff9e15] hover:underline ">
                            Login here
                        </a>
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;

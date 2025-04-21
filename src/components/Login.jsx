import { useState } from "react";

const Login = () => {
    const [emailId, setEmailId] = useState("");
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [pressId, setPressId] = useState("");
    const [signUp,setSignUp] = useState(true);

    const handleClick = () =>{
        setSignUp(!signUp);
    }

    const handleButtonClick = (e) => {
        e.preventDefault();
        console.log({ emailId, password, role, pressId });
    };

    return (
        <div className="min-h-screen bg-gray-800 flex items-center justify-center px-4">
            <div className="bg-gray-900 shadow-lg rounded-2xl p-8 w-full max-w-md">

                <h2 className="text-2xl font-bold text-center text-gray-100 mb-6">
                    Login to <span className="text-blue-500">GeoNews</span>
                </h2>

                <form className="space-y-5">

                    {signUp &&
                        <>
                            <div>
                                <label className="block text-gray-300 mb-1" htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    placeholder="Enter your first Name"
                                    className="w-full px-4 py-2 border border-gray-700 bg-gray-800 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 mb-1" htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    placeholder="Enter your last Name"
                                    className="w-full px-4 py-2 border border-gray-700 bg-gray-800 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={pressId}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                        </>

                    }
                    {/* Email */}
                    <div>
                        <label className="block text-gray-300 mb-1" htmlFor="emailId">Email</label>
                        <input
                            type="email"
                            id="emailId"
                            autoFocus
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 border border-gray-700 bg-gray-800 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={emailId}
                            onChange={(e) => setEmailId(e.target.value)}
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-300 mb-1" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-2 border border-gray-700 bg-gray-800 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Role Dropdown */}
                    <div>
                        <label htmlFor="role" className="block text-gray-300 mb-1">Select Role</label>
                        <select
                            id="role"
                            className="w-full px-4 py-2 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="" disabled>Select your role</option>
                            <option value="user">User</option>
                            <option value="reporter">Reporter</option>
                        </select>
                    </div>

                    {/* Conditional Press ID */}
                    {role === "reporter" && (
                        <div>
                            <label className="block text-gray-300 mb-1" htmlFor="pressId">Press ID</label>
                            <input
                                type="text"
                                id="pressId"
                                placeholder="Enter your press ID"
                                className="w-full px-4 py-2 border border-gray-700 bg-gray-800 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={pressId}
                                onChange={(e) => setPressId(e.target.value)}
                            />
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                        onClick={handleButtonClick}
                    >
                        Log In
                    </button>
                </form>
                    <p className="text-white cursor-pointer my-[0.5rem]" onClick={handleClick}>{signUp ? "Already a user? Login Now" : "New to GeoNews? Sign Up Now"}</p>
            </div>
        </div>
    );
};

export default Login;

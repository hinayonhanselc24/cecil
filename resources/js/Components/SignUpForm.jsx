import React, { useState } from "react";
import { useVideoIntersectionObserver } from '@/hooks/useVideoIntersectionObserver';

const SignUpForm = ({ data = {}, setData, processing }) => {
    
    const pVideoRef = useVideoIntersectionObserver();

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!data.last_name) newErrors.last_name = "Last name is required";
        if (!data.email) {
        newErrors.email = "Email is required";
        } else if (!/^[\w-.]+@[\w-]+\.[a-z]{2,7}$/.test(data.email)) {
        newErrors.email = "Email is invalid";
        }

        if (!data.password) newErrors.password = "password is required";
        if (!data.confirm_password) newErrors.confirm_password = "Confirm password is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
        console.log("Form submitted:", data);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center text-black py-8 px-4">
            <h1 className="text-3xl font-bold mb-10">Sign Up Form</h1>
            <div className="w-full max-w-4xl flex flex-col md:flex-row flex-wrap gap-4 justify-center mt-6">
                <div className="flex-1 border rounded-lg p-2 md:p-6 bg-green-200 shadow">
                    <div className="text-black mb-12 max-w-full max-[900px]:mb-6 max-sm:mx-auto">
                        <video
                        ref={pVideoRef}
                        className="w-full rounded-full h-[200px] w-[200px] mx-auto object-cover"
                        loop
                        muted
                        >
                        <source src="/videos/pf.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <h2 className="text-xl text-center sm:text-2xl font-semibold mb-4">
                        Let's get you set up
                    </h2>
                    <p className="text-sm sm:text-base text-center">
                        It should only take you a minute to connect
                    </p> 
                </div>
                <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="relative z-0 w-full mb-4 group">
                            <input
                                type="text"
                                name="first_name"
                                id="first_name"
                                className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                                placeholder=" "
                                value={data.first_name}
                                onChange={(e) => setData('first_name', e.target.value)}
                                required
                            />
                            <label
                                htmlFor="first_name"
                                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-green-600"
                            >
                                First Name
                            </label>
                            {errors.first_name && <span className="text-red-600 text-sm">{errors.first_name}</span>}
                        </div>
                        <div className="relative z-0 w-full mb-4 group">
                            <input
                                type="text"
                                name="last_name"
                                id="last_name"
                                className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                                placeholder=" "
                                value={data.last_name}
                                onChange={(e) => setData('last_name', e.target.value)}
                                required
                            />
                            <label
                                htmlFor="last_name"
                                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-green-600"
                            >
                                Last Name
                            </label>
                            {errors.last_name && <span className="text-red-600 text-sm">{errors.last_name}</span>}
                        </div>
                        <div className="relative z-0 w-full mb-4 group">
                            <input
                                type="text"
                                name="email"
                                id="email"
                                className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                                placeholder=" "
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                required
                            />
                            <label
                                htmlFor="email"
                                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-green-600"
                            >
                                Email Address
                            </label>
                            {errors.email && <span className="text-red-600 text-sm">{errors.email}</span>}
                        </div>
                        <div className="relative z-0 w-full mb-4 group">
                            <input
                                type="text"
                                name="phone_number"
                                id="phone_number"
                                className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                                placeholder=" "
                                value={data.phone_number}
                                onChange={(e) => setData('phone_number', e.target.value)}
                                required
                            />
                            <label
                                htmlFor="phone_number"
                                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-green-600"
                            >
                                Phone Number
                            </label>
                            {errors.phone_number && <span className="text-red-600 text-sm">{errors.phone_number}</span>}
                        </div>
                        <div className="relative z-0 mt-4 w-full mb-4 group">
                            <input
                                type="text"
                                name="password"
                                id="password"
                                className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                                placeholder=" "
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                required
                            />
                            <label
                                htmlFor="password"
                                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-green-600"
                            >
                                Password
                            </label>
                            {errors.password && <span className="text-red-600 text-sm">{errors.password}</span>}
                        </div>
                        <div className="relative z-0 mt-4 w-full mb-4 group">
                            <input
                                type="text"
                                name="confirm_password"
                                id="confirm_password"
                                className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                                placeholder=" "
                                value={data.confirm_password}
                                onChange={(e) => setData('confirm_password', e.target.value)}
                                required
                            />
                            <label
                                htmlFor="confirm_password"
                                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-green-600"
                            >
                                Confirm Password
                            </label>
                            {errors.confirm_password && <span className="text-red-600 text-sm">{errors.confirm_password}</span>}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="text"
                            disabled={processing}
                            className="bg-green-600 text-white hover:text-black px-6 py-3 flex justify-center items-center rounded-md text-xl disabled:opacity-50"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;

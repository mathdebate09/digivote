import React, { useState } from "react";

import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

function DetailsSignUp({ handleNextClick, step, setStep }) {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmpass: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });

    // Validate email
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Invalid email address",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
      }
    }

    // Validate password match
    if (name === "confirmpass" || name === "password") {
      if (userInfo.password !== value && name === "confirmpass") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: "Passwords do not match",
        }));
      } else if (userInfo.confirmpass !== value && name === "password") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: "Passwords do not match",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.email && !errors.password) {
      setStep(2);
      handleNextClick();
    }
  };
  
  return (
    <div className="-mt-2 flex flex-col items-center justify-center p-3 sm:p-6 md:-mt-8 md:p-8">
      <h1 className="mb-6 text-center text-2xl font-bold">
        Set-up your DigiVote Account
      </h1>
      <form
        onSubmit={handleSubmit}
        className="border-black w-full max-w-md rounded-2xl border-2 bg-white p-6 shadow-lg"
      >
        <label
          htmlFor="name"
          className="block p-1 text-lg font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="eg. Mandeep Singh"
          required
          value={userInfo.name}
          onChange={handleChange}
          className="mt-2 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm transition duration-300 ease-in-out focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <label htmlFor="email" className="block p-1 text-lg text-gray-700">
          Enter your Email
          <input
            type="email"
            name="email"
            id="email"
            placeholder="eg. mandips@gmail.com"
            required
            value={userInfo.email}
            onChange={handleChange}
            className={`mt-2 block w-full rounded-md border px-4 py-2 shadow-sm transition duration-300 ease-in-out focus:outline-none focus:ring-2 ${
              errors.email ?
                "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            }`}
          />
          {errors.email && (
            <p className="mt-1 flex items-center text-sm text-red-500">
              <FaTimesCircle className="mr-1" /> {errors.email}
            </p>
          )}
        </label>

        <label htmlFor="password">
          <p className="block p-1 text-lg font-medium text-gray-700">
            Enter your Password
          </p>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
            value={userInfo.password}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm transition duration-300 ease-in-out focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </label>

        <label htmlFor="confirmpass">
          <p className="block p-1 text-lg font-medium text-gray-700">
            Confirm Password
          </p>
          <input
            type="password"
            name="confirmpass"
            id="confirmpass"
            placeholder="Confirm Password"
            required
            value={userInfo.confirmpass}
            onChange={handleChange}
            className={`mt-2 block w-full rounded-md border px-4 py-2 shadow-sm transition duration-300 ease-in-out focus:outline-none focus:ring-2 ${
              errors.password ?
                "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            }`}
          />
          {errors.password && (
            <p className="mt-1 flex items-center text-sm text-red-500">
              <FaTimesCircle className="mr-1" /> {errors.password}
            </p>
          )}
        </label>
        <div className="mt-4 flex items-center justify-center p-2">
          {/* Next Button, only visible at step 1 */}
          {step === 1 && (
            <button
              type="submit"
              className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm transition duration-150 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Next
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default DetailsSignUp;

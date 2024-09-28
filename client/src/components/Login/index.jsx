import React, { useState } from "react";
import Layout from "../Layout";
import { getAuth, signInWithEmailAndPassword, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import {auth} from '../../firebase/config'
import { useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {signinFailure, signinStart, signinSuccess} from "../../context/user/userSlice"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [isEmailVerified, setIsEmailVerified] = useState(false); // For tracking email login status
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    phoneNumber: "",
    otp: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Configure reCAPTCHA for phone verification
  const configureRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
        callback: () => {
          console.log("Recaptcha verified");
        },
      },
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!password || !email){
      return dispatch(signinFailure("All fields are required"));
    }

    try {
      dispatch(signinStart());

      const res = await fetch('http://localhost:3000/api/auth/signin',{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email,password})
      });
      const data = await res.json();

      if(data.success === false){
        dispatch(signinFailure(data.message));
      }

      if(res.ok){
        dispatch(signinSuccess(data));
        setIsEmailVerified(true);
      }

    } catch(error){
      console.error("Email login failed", error);
      setErrors((prev) => ({ ...prev, email: "Invalid email or password" }));
    }
  }


  // Handle Phone Number OTP Submission
  const handlePhoneSubmit = async (event) => {
    event.preventDefault();
    configureRecaptcha();
    const appVerifier = window.recaptchaVerifier;

    try {
      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      setConfirmationResult(confirmationResult);
      console.log("OTP sent!");
    } catch (error) {
      console.error("SMS not sent", error);
      setErrors((prev) => ({ ...prev, phoneNumber: "Invalid phone number" }));
    }
  };

  // Handle OTP Verification
  const handleOtpSubmit = async (event) => {
    event.preventDefault();
    try {
      const credential = await confirmationResult.confirm(otp);
      console.log("Phone verification successful:", credential);
      navigate('/')
    } catch (error) {
      console.error("OTP verification failed", error);
      setErrors((prev) => ({ ...prev, otp: "Invalid OTP" }));
    }
  };

  return (
    <Layout bgColor={"bg-blue-50"}>
    <div className="flex -mt-2 md:-mt-8 flex-col items-center justify-center p-3 sm:p-6 md:p-8">
    <h1 className="mb-6 text-2xl font-bold text-center">
    Login to your Digivote account
    </h1>

    {/* Email/Password Login Form */}
    {!isEmailVerified && (
      <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-white rounded-2xl border-2 border-black p-6 shadow-lg"
      >
      <label htmlFor="email" className="block p-1 text-lg text-gray-700">
      Enter your Email
      <input
      type="email"
      name="email"
      id="email"
      placeholder="eg. mandips@gmail.com"
      required
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className={`mt-2 block w-full rounded-md border px-4 py-2 shadow-sm transition duration-300 ease-in-out focus:outline-none focus:ring-2 ${
        errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
      }`}
      />
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
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="mt-2 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm transition duration-300 ease-in-out focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      </label>

      <div className="flex mt-4 items-center justify-center p-2">
      <button
      type="submit"
      className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm transition duration-150 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
      Next
      </button>
      </div>
      </form>
    )}

    {/* Phone Number Verification Form (Shown after email login) */}
    {isEmailVerified && (
      <div className="w-full max-w-md bg-white rounded-2xl border-2 border-black p-6 shadow-lg">
      <label htmlFor="phone" className="block p-1 text-lg text-gray-700">
      Enter your Phone Number
      <input
      type="tel"
      name="phone"
      id="phone"
      placeholder="eg. +123456789"
      required
      value={phoneNumber}
      onChange={(e) => setPhoneNumber(e.target.value)}
      className={`mt-2 block w-full rounded-md border px-4 py-2 shadow-sm transition duration-300 ease-in-out focus:outline-none focus:ring-2 ${
        errors.phoneNumber ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
      }`}
      />
      </label>

      <div id="recaptcha-container"></div>

      <div className="flex mt-4 items-center justify-center p-2">
      <button
      onClick={handlePhoneSubmit}
      className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm transition duration-150 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
      Send OTP
      </button>
      </div>

      {/* OTP Verification Form */}
      {confirmationResult && (
        <form onSubmit={handleOtpSubmit}>
        <label htmlFor="otp" className="block p-1 text-lg text-gray-700">
        Enter the OTP
        <input
        type="text"
        name="otp"
        id="otp"
        placeholder="OTP"
        required
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className={`mt-2 block w-full rounded-md border px-4 py-2 shadow-sm transition duration-300 ease-in-out focus:outline-none focus:ring-2 ${
          errors.otp ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        }`}
        />
        </label>

        <div className="flex mt-4 items-center justify-center p-2">
        <button
        type="submit"
        className="inline-flex items-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm transition duration-150 ease-in-out hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
        Verify OTP
        </button>
        </div>
        </form>
      )}
      </div>
    )}
    </div>
    </Layout>
  );
}
export default Login;

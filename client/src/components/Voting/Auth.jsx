import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // For success/fail icons

function VoteAuth({setAuthenticated}) {
  const [aadharNumber, setAadharNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [authResult, setAuthResult] = useState(null); // Will store true for success, false for failure
  const [message, setMessage] = useState(""); // To store OTP message

  const handleAadharSubmit = (e) => {
    e.preventDefault();
    if (!aadharNumber) return;

    // Simulate sending OTP
    setIsOtpSent(true);
    setOtp(""); // Reset OTP field
    setAuthResult(null); // Clear previous auth result
    setMessage(`OTP sent to the Aadhar number: ${aadharNumber}`);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (!otp) return;

    // Simulate OTP verification
    setIsVerifying(true);
    setAuthResult(null); // Clear previous auth result
    setMessage(""); // Clear previous message

    setTimeout(() => {
      const success = otp === "123456"; // For demonstration, we assume OTP is always '123456'
      setAuthResult(success);
      setIsVerifying(false);
      setMessage(success ? "Authentication Successful!" : "Authentication Failed. Please try again.");
      setAuthenticated(true);
    }, 2000); // Simulate a 2-second verification
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
    <h1 className="text-3xl font-bold mb-6">Aadhar OTP Verification</h1>

    {!isOtpSent ? (
      <form onSubmit={handleAadharSubmit} className="bg-white p-6 rounded-lg shadow-md">
      {message && (
        <p className="mb-4 text-green-600">{message}</p>
      )}
      <label htmlFor="aadharNumber" className="block mb-2 text-lg font-medium">
      Enter your Aadhar Number
      </label>
      <input
      type="text"
      id="aadharNumber"
      name="aadharNumber"
      placeholder="e.g. 1234 5678 9012"
      required
      value={aadharNumber}
      onChange={(e) => setAadharNumber(e.target.value)}
      className="w-full p-2 border rounded-lg mb-4"
      />
      <button
      type="submit"
      className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
      >
      Send OTP
      </button>
      </form>
    ) : (
      <form onSubmit={handleOtpSubmit} className="bg-white p-6 rounded-lg shadow-md">
      {message && (
        <p className={`mb-4 ${authResult === false ? "text-red-600" : "text-green-600"}`}>
        {message}
        </p>
      )}
      <label htmlFor="otp" className="block mb-2 text-lg font-medium">
      Enter the OTP sent to your Aadhar number
      </label>
      <input
      type="text"
      id="otp"
      name="otp"
      placeholder="Enter OTP"
      required
      value={otp}
      onChange={(e) => setOtp(e.target.value)}
      className="w-full p-2 border rounded-lg mb-4"
      />

      <button
      type="submit"
      className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
      disabled={isVerifying}
      >
      {isVerifying ? "Verifying..." : "Verify OTP"}
      </button>
      </form>
    )}

    {authResult !== null && !isVerifying && (
      <div className="mt-6 flex flex-col items-center justify-center">
      {authResult ? (
        <p className="text-2xl text-green-600">
        <FaCheckCircle className="inline-block mr-2" /> Authentication Successful!
        </p>
      ) : (
        <p className="text-2xl text-red-600">
        <FaTimesCircle className="inline-block mr-2" /> Authentication Failed.
        </p>
      )}
      </div>
    )}
    </div>
  );
}

export default VoteAuth;

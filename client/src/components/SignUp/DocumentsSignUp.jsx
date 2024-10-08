import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signinSuccess } from "../../context/user/userSlice";
import { auth } from "../../firebase/config";

function DocumentsSignUp({ setFormData, formData }) {
  const [errorMessages, setErrorMessages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [disability, setDisability] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const userDocs = {
      aadhar: data.get("Aadhar"),
      voterId: data.get("voterId"),
      disability: data.get("disability"),
      medicalCertificate: data.get("MedCert"),
    };

    if (!formData.name || !formData.password || !formData.email) {
      return setErrorMessages("All fields are required");
    }

    try {
      const res = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        setLoading(false);
        return setErrorMessages(data.message);
      }

      setLoading(false);

      if (res.ok) {
        dispatch(signinSuccess({ ...formData, login: false, disability }));
        navigate("/login");
      }
    } catch (error) {
      setErrorMessages(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="-mt-20 flex h-screen flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10">
      <h1 className="mb-6 text-center text-2xl font-bold">
        Finalise the submission with minimal Paperwork
      </h1>
      <form
        action="get"
        onSubmit={handleSubmit}
        className="border-black w-full max-w-md rounded-2xl border-2 bg-white p-6 shadow-lg"
      >
        <label
          htmlFor="Aadhar"
          className="block p-1 text-lg font-medium text-gray-700"
        >
          Submit your Aadhar
          <input
            type="file"
            name="Aadhar"
            id="AadharFile"
            className="mt-2 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm transition duration-300 ease-in-out focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </label>
        <label
          htmlFor="voterid"
          className="block p-1 text-lg font-medium text-gray-700"
        >
          Enter your voter id
          <input
            type="text"
            name="voterId"
            id="voterId"
            className="mt-2 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm transition duration-300 ease-in-out focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </label>
        <label
          htmlFor="Disability"
          className="block p-1 text-lg font-medium text-gray-700"
        >
          Please specify any accessibility features you may require.
          <select
            name="disability"
            id="disability"
            className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 shadow-sm transition duration-300 ease-in-out focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => setDisability(e.target.value)}
          >
            <option value="default">Select</option>
            <option value="Braille">Blind</option>
            <option value="Interpreter">Mute</option>
            <option value="HearingAid">Deaf</option>
          </select>
        </label>
        <label
          htmlFor="MedCert"
          className="block p-1 text-lg font-medium text-gray-700"
        >
          Enter your Medical Disability Certificate
          <input
            type="file"
            name="MedCert"
            id="MedCert"
            className="mt-2 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm transition duration-300 ease-in-out focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </label>
        <div className="flex items-center justify-center p-2">
          <button
            type="submit"
            className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm transition duration-150 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default DocumentsSignUp;

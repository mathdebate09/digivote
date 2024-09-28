import React, { useState } from "react";
import Layout from "../Layout"
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Username: ${username}\nPassword: ${password}`);
  };

  return (
    <Layout bgColor={"bg-blue-50"}>
          <div className="flex -mt-2 md:-mt-8 flex-col items-center justify-center p-3 sm:p-6 md:p-8">
      <h1 className="mb-6 text-2xl font-bold text-center">
        Login to your Digivote  account.
      </h1>
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

    </div>
    </Layout>
  );
}

export default Login;

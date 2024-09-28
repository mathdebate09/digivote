import React, { useState } from "react";

import { Link } from "react-router-dom";

import profileImage from "../../assets/vectors/profile.svg";
import users from "../../utils/userdata";
import Layout from "../Layout";

function Profile() {
  const id = 2;
  const [textsize, setTextSize] = useState(0);
  const user = users.find((item) => item.id === id);

  // Function to cycle between text sizes
  const changeSize = () => {
    setTextSize((prev) => (prev + 1) % 3); // Cycle between 0, 1, and 2
  };

  if (!user) {
    return <p>User not registered</p>;
  }
  const textSizeClass =
    textsize === 0 ? "text-sm"
    : textsize === 1 ? "text-base"
    : "text-xl";

  return (
    <Layout bgColor={"bg-blue-50"}>
      {/* Button to change text size */}
      <button
        onClick={changeSize}
        className="mb-4 rounded bg-gray-300 p-2 hover:bg-gray-400"
      >
        Change Text Size
      </button>

      <div className="flex h-screen flex-col items-center justify-center">
        <div className="-mt-48 flex h-80 w-fit items-center justify-center rounded-xl border bg-white p-12 shadow-lg">
          <img
            src={profileImage}
            className="mr-12 h-40 w-40 rounded-full"
            alt="Profile"
          />
          <div>
            {/* Apply the text size dynamically */}
            <p className={`${textSizeClass} font-bold`}>Name: {user.name}</p>
            <p className={`mt-2 ${textSizeClass} font-medium`}>
              Aadhar: {user.aadhar}
            </p>
            <p className={`mt-2 ${textSizeClass} font-normal`}>
              Phone Number: {user.phone}
            </p>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="mt-6 flex flex-col gap-6">
          <div>
            <button className="flex w-60 flex-col items-center justify-center rounded-lg bg-green-500 px-6 py-3 text-white shadow-md hover:bg-green-600">
              <p className={`${textSizeClass} font-semibold`}>Help</p>
              <p className="text-sm">One Line on Help</p>
            </button>
          </div>
          <div>
            <button className="flex w-60 flex-col items-center justify-center rounded-lg bg-blue-500 px-6 py-3 text-white shadow-md hover:bg-blue-600">
              <Link to="/boothmap">
                <p className={`${textSizeClass} font-semibold`}>
                  Update Location
                </p>
              </Link>
              <p className="text-sm">One line on Update Location</p>
            </button>
          </div>
          <div>
            <button className="flex w-60 flex-col items-center justify-center rounded-lg bg-red-500 px-6 py-3 text-white shadow-md hover:bg-red-600">
              Logout
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;

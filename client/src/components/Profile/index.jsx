import React from "react";

import { Link } from "react-router-dom";

import profileImage from "../../assets/vectors/profile.svg";
import users from "../../utils/userdata";
import Layout from "../Layout";

function Profile({}) {
  const id = 2;
  const user = users.find((item) => item.id === id);

  if (!user) {
    return <p>User not registered</p>;
  }
  return (
    <Layout bgColor={"bg-blue-50"}>
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="-mt-48 flex h-80 w-fit items-center justify-center rounded-xl border bg-white p-12 shadow-lg">
          <img
            src={profileImage}
            className="mr-12 h-40 w-40 rounded-full"
            alt="Profile"
          />
          <div>
            <p className="text-2xl font-bold">Name: {user.name}</p>
            <p className="mt-2 text-xl font-medium">Aadhar: {user.aadhar}</p>
            <p className="mt-2 text-lg font-normal">
              Phone Number: {user.phone}
            </p>
          </div>
        </div>
        <div className="mt-6 flex space-x-4">
          <button className="flex flex-col items-center justify-center rounded-lg bg-red-500 px-6 py-3 text-white shadow-md hover:bg-red-600">
            <p className="text-lg font-semibold">Help</p>
            <p className="text-sm">One Line on Help</p>
          </button>
          <button className="flex flex-col items-center justify-center rounded-lg bg-blue-500 px-6 py-3 text-white shadow-md hover:bg-blue-600">
            <Link to="/boothmap">
              <p className="text-lg font-semibold">Update Location</p>
            </Link>
            <p className="text-sm">One line on Update Location</p>
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;

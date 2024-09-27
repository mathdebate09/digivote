import React from "react";
import { MdDomainVerification } from "react-icons/md";

import Layout from "../Layout";
import CountdownTimer from './CountdownTimer';
import { activeUser } from "../../utils/data";


function getGreeting() {
  const currentHour = new Date().getHours();
  if (currentHour < 12) {
    return "Good Morning";
  } else if (currentHour < 18) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

function Home() {
  return (
    <Layout bgColor={"bg-blue-50"}>
      <div className="">
        <p className="text-4xl font-medium text-black-softer">{getGreeting()}</p>
        <p className="text-5xl font-semibold">{activeUser.name.split(' ')[0]}</p>
      </div>
      <div className="flex my-4 justify-center">
        <CountdownTimer targetDate="2024-12-31T23:59:59" />
      </div>
      <div className="w-7/8 md:w-3/5 grid mx-auto gap-10 p-4 grid-cols-2">
        <div className="flex bg-orange-400 bg-opacity-50 py-12 rounded-3xl flex-col items-center place-center">
          <MdDomainVerification className="text-5xl"/>
          <p className="text-2xl">Verification Status</p>
        </div>
        <div className="flex bg-orange-400 bg-opacity-50 py-12 rounded-3xl flex-col items-center place-center">
          <MdDomainVerification className="text-5xl"/>
          <p className="text-2xl">Verification Status</p>
        </div>
        <div className="flex bg-orange-400 bg-opacity-50 py-12 rounded-3xl flex-col items-center place-center">
          <MdDomainVerification className="text-5xl"/>
          <p className="text-2xl">Verification Status</p>
        </div>
        <div className="flex bg-orange-400 bg-opacity-50 py-12 rounded-3xl flex-col items-center place-center">
          <MdDomainVerification className="text-5xl"/>
          <p className="text-2xl">Verification Status</p>
        </div>
      </div>
    </Layout>
  );
}

export default Home;

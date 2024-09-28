import React from "react";
import { MdDomainVerification } from "react-icons/md";

import Layout from "../Layout";
import CountdownTimer from './CountdownTimer';
import { activeUser } from "../../utils/data";
import ChatBot from "../ChatBot"

import localBodies from "../../assets/cards/local-bodies.png";
import parliament from "../../assets/cards/parliament.png";
import lokSabha from "../../assets/cards/lok-sabha.png";
import rajyaSabha from "../../assets/cards/rajya-sabha.png";

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
      <div className="text-start">
        <p className="text-4xl font-medium text-black-softer">{getGreeting()}</p>
        <p className="text-5xl font-semibold">{activeUser.name.split(' ')[0]}</p>
      </div>
      <div className="flex my-4 justify-center">
        <CountdownTimer targetDate="2024-12-31T23:59:59" />
      </div>
      {/* <div className="w-7/8 md:w-3/5 grid mx-auto gap-10 p-4 grid-cols-2">
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
      </div> */}
      <div className="w-7/8 md:w-3/5 md:p-8 pb-12 mx-auto gap-8 md:gap-20 flex flex-col">
        <img src={parliament} alt="Parliament" className="w-4/5 rounded-lg mx-auto shadow-2xl" />
        <img src={lokSabha} alt="Lok Sabha" className="w-4/5 rounded-lg mx-auto shadow-2xl" />
        <img src={rajyaSabha} alt="Rajya Sabha" className="w-4/5 rounded-lg mx-auto shadow-2xl" />
        <img src={localBodies} alt="Local Bodies" className="w-4/5 rounded-lg mx-auto shadow-2xl" />
      </div>
      <ChatBot />
    </Layout>
  );
}

export default Home;

import React, {useState} from "react";
import { MdDomainVerification } from "react-icons/md";

import Layout from "../Layout";
import CountdownTimer from './CountdownTimer';
import { activeUser } from "../../utils/data";
import ChatBot from "../ChatBot"
import TranslateButton from "../TranslateButton";
import { handleAudio } from "../../utils/helper"

import localBodies from "../../assets/cards/local-bodies.png";
import parliament from "../../assets/cards/parliament.png";
import lokSabha from "../../assets/cards/lok-sabha.png";
import rajyaSabha from "../../assets/cards/rajya-sabha.png";
import SignButton from "../SignButton";

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
  useState(()=> {
    handleAudio("Home page of your profile, please navigate using hte nav on the bottom for mobile and top on desktops")
  })
  return (
    <Layout bgColor={"bg-blue-50"}>
      <div onClick={() => handleAudio(`${getGreeting()}, ${activeUser.name.split(' ')[0]}, Welcome back to DigiVote`)} className="text-start">
        <p className="text-4xl font-medium text-black-softer">{getGreeting()}</p>
        <p className="text-5xl font-semibold">{activeUser.name.split(' ')[0]}</p>
      </div>
      <div onClick={() => handleAudio("Check counters for upcoming elections")} className="flex my-4 justify-center ">
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
        <Link onClick={() => handleAudio("Vote for Parliament elections")} to="/voting"><img src={parliament} alt="Parliament" className="w-4/5 rounded-lg mx-auto shadow-2xl" /></Link>
        <Link onClick={() => handleAudio("Vote for Lok Sabha elections")} to="/voting"><img src={lokSabha} alt="Lok Sabha" className="w-4/5 rounded-lg mx-auto shadow-2xl" /></Link>
        <Link onClick={() => handleAudio("Vote for Rajya Sabha elections")} to="/voting"><img src={rajyaSabha} alt="Rajya Sabha" className="w-4/5 rounded-lg mx-auto shadow-2xl" /></Link>
        <Link onClick={() => handleAudio("Vote for Local Bodies elections")} to="/voting"><img src={localBodies} alt="Local Bodies" className="w-4/5 rounded-lg mx-auto shadow-2xl" /></Link>
      </div>

      <SignButton />
      <TranslateButton />
      <ChatBot />
    </Layout>
  );
}

export default Home;

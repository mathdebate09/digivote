import React, { useState } from "react";
import { Link } from "react-router-dom"

import Layout from "../Layout"
import ChatBot from "../ChatBot";
import CountdownTimer from "../Home/CountDownTimer";

import lokSabha from "../../assets/cards/lok-sabha.png"
import rajyaSabha from "../../assets/cards/rajya-sabha.png"

function Voting({ }) {

  return (
    <Layout bgColor={"bg-blue-50"}>
      <div className="flex flex-col items-center justify-center">
        <img src={rajyaSabha} className="w-full max-w-[39rem] py-4 rounded-3xl my-2 border" alt="lok sabha" />
        <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
          <CountdownTimer targetDate="2024-11-09T23:59:59" />
          <Link to="/voting/rajya-sabha" className="bg-yellow-400 rounded-full px-4 py-2 text-2xl">Vote Now!</Link>
        </div>
      </div>
      <div className="flex flex-col pb-16 items-center justify-center pb">
        <img src={lokSabha} className="w-full max-w-[39rem] py-4 rounded-3xl my-2 border" alt="rajya sabha" />
        <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
          <CountdownTimer targetDate="2024-11-29T23:59:59" />
          <Link to="/voting/lok-sabha" className="bg-yellow-400 rounded-full px-4 py-2 text-2xl">Vote Now!</Link>
        </div>
      </div>
      <ChatBot />
    </Layout>
  )
}

export default Voting;

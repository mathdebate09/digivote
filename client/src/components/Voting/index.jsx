import React, { useState } from "react";

import { Link } from "react-router-dom";

import lokSabha from "../../assets/cards/lok-sabha.png";
import rajyaSabha from "../../assets/cards/rajya-sabha.png";
import { handleAudio } from "../../utils/helper";
import ChatBot from "../ChatBot";
import CountdownTimer from "../Home/CountdownTimer";
import Layout from "../Layout";
import SignButton from "../SignButton";
import TranslateButton from "../TranslateButton";

function Voting({}) {
  return (
    <Layout bgColor={"bg-blue-50"}>
      <div className="flex flex-col items-center justify-center">
        <img
          src={rajyaSabha}
          className="my-2 w-full max-w-[39rem] rounded-3xl border py-4"
          alt="lok sabha"
        />
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
          <CountdownTimer targetDate="2024-11-09T23:59:59" />
          <Link
            onClick={() =>
              handleAudio("Check out your list for Rajya Sabha candidates")
            }
            to="/voting/rajya-sabha"
            className="rounded-full bg-yellow-400 px-4 py-2 text-2xl"
          >
            Vote Now!
          </Link>
        </div>
      </div>
      <div className="pb flex flex-col items-center justify-center pb-16">
        <img
          src={lokSabha}
          className="my-2 w-full max-w-[39rem] rounded-3xl border py-4"
          alt="rajya sabha"
        />
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
          <CountdownTimer targetDate="2024-11-29T23:59:59" />
          <Link
            onClick={() =>
              handleAudio("Check out your list for Lok Sabha candidates")
            }
            to="/voting/lok-sabha"
            className="rounded-full bg-yellow-400 px-4 py-2 text-2xl"
          >
            Vote Now!
          </Link>
        </div>
      </div>
      <SignButton />
      <TranslateButton />
      <ChatBot />
    </Layout>
  );
}

export default Voting;

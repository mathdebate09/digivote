import React from "react";

import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import { handleAudio } from "../../utils/helper";

import heroHeading from "../../assets/vectors/hero-landing.png";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center pb-4 md:pb-16 md:pt-4 font-body font-medium">
      <div onClick={() => handleAudio("Secure.Accessible.Reliable.Simple. DigiVote prioritizes accessibility, ensuring everyone can participate with ease. Built with top-notch security, your vote remains safe, reliable, and confidential.")} className="md:py-16 py-4 text-center md:text-7xl text-3xl font-bold tracking-wide text-black-softer">
        <h2>
          Secure . <span className="italic text-gray-500">Accessible .</span>
        </h2>
        <h2>
          <span className="italic text-gray-500">Reliable .</span> Simple .
        </h2>
        <p className="mt-4 max-w-[60rem] text-sm mx-4 md:text-xl font-normal tracking-normal text-gray-400">
          DigiVote prioritizes accessibility, ensuring everyone can participate
          with ease. Built with top-notch security, your vote remains safe,
          reliable, and confidential.
        </p>
      </div>
      <img
        className="md:-mt-14 md:w-[35rem] mb-14"
        src={heroHeading}
        alt="india votes vector art"
        onClick={() => handleAudio("Image representing encouragement for participation in voting India")}
      />
      <div className="flex max-w-[40rem] px-2 flex-col items-center justify-center mx-4 gap-6 rounded-2xl bg-gray-700 py-4 text-white">
        <div  onClick={() => handleAudio("All-in-one platform, Using DigiVote is an easy way to conduct transparent and widely-accessible elections, click below button to get started")} className="flex flex-col items-center">
          <h3 className="text-2xl md:text-4xl tracking-wide">All-in-one</h3>
          <p className="md:w-4/6 text-center text-sm md:text-base font-normal text-gray-400">
            Using <span className="text-gray-300">DigiVote</span> is an easy way
            to conduct transparent and widely-accessible elections
          </p>
        </div>
        <Link
          to="/login"
          className="flex w-[95%] items-center justify-center rounded-lg bg-blue-500"
          onClick={() => handleAudio("Proceed to login")}
        >
          <button className="flex items-center justify-center gap-2 rounded-lg bg-blue-500 py-2">
            <p>Get Started</p>
            <FaChevronRight />
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;

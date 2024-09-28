import React from "react";

import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import heroHeading from "../../assets/vectors/hero-landing.png";
import { handleAudio } from "../../utils/helper";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center pb-4 font-body font-medium md:pb-16 md:pt-4">
      <div
        onClick={() =>
          handleAudio(
            "Secure,Accessible,Reliable,Simple, DigiVote prioritizes accessibility, ensuring everyone can participate with ease. Built with top-notch security, your vote remains safe, reliable, and confidential."
          )
        }
        className="py-4 text-center text-3xl font-bold tracking-wide text-black-softer md:py-16 md:text-7xl"
      >
        <h2>
          Secure . <span className="italic text-gray-500">Accessible .</span>
        </h2>
        <h2>
          <span className="italic text-gray-500">Reliable .</span> Simple .
        </h2>
        <p className="mx-4 mt-4 max-w-[60rem] text-sm font-normal tracking-normal text-gray-400 md:text-xl">
          DigiVote prioritizes accessibility, ensuring everyone can participate
          with ease. Built with top-notch security, your vote remains safe,
          reliable, and confidential.
        </p>
      </div>
      <img
        className="mb-14 md:-mt-14 md:w-[35rem]"
        src={heroHeading}
        alt="india votes vector art"
        onClick={() =>
          handleAudio(
            "Image representing encouragement for participation in voting India"
          )
        }
      />
      <div className="mx-4 flex max-w-[40rem] flex-col items-center justify-center gap-6 rounded-2xl bg-gray-700 px-2 py-4 text-white">
        <div
          onClick={() =>
            handleAudio(
              "All-in-one platform, Using DigiVote is an easy way to conduct transparent and widely-accessible elections, click below button to get started"
            )
          }
          className="flex flex-col items-center"
        >
          <h3 className="text-2xl tracking-wide md:text-4xl">All-in-one</h3>
          <p className="text-center text-sm font-normal text-gray-400 md:w-4/6 md:text-base">
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

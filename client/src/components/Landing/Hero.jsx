import React from "react";

import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import heroHeading from "../../assets/vectors/hero-landing.png";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center pb-16 pt-4 font-body font-medium">
      <div className="py-16 text-center text-7xl font-bold tracking-wide text-black-softer">
        <h2>Secure . Accessible .</h2>
        <h2>Reliable . Simple .</h2>
        <p className="mt-4 max-w-[60rem] text-xl font-normal tracking-normal text-gray-400">
          DigiVote prioritizes accessibility, ensuring everyone can participate
          with ease. Built with top-notch security, your vote remains safe,
          reliable, and confidential.
        </p>
      </div>
      <img
        className="-m-14 mb-14"
        src={heroHeading}
        alt="india votes vector art"
      />
      <div className="flex max-w-[40rem] flex-col items-center justify-center gap-6 rounded-2xl bg-gray-700 py-4 text-white">
        <div className="flex flex-col items-center">
          <h3 className="text-4xl tracking-wide">All-in-one</h3>
          <p className="w-4/6 text-center text-base font-normal text-gray-400">
            Using <span className="text-gray-300">DigiVote</span> is an easy way
            to conduct transparent and widely-accessible elections
          </p>
        </div>
        <Link
          to="/login"
          className="flex w-[95%] items-center justify-center gap-2 rounded-lg bg-blue-500"
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

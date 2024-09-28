import React from "react";

import { Link } from "react-router-dom";

import logo from "../../assets/logos/digivote.png";
import { handleAudio } from "../../utils/helper";

function LandingNav({}) {
  return (
    <nav className="flex items-center justify-start bg-transparent px-4 py-6 font-body font-medium md:justify-between md:px-24 md:py-8">
      <Link
        onClick={() => handleAudio("Return to Landing Page")}
        to="/"
        className="flex select-none items-center gap-4 text-3xl font-bold text-black-soft md:text-4xl"
      >
        <img className="w-16" src={logo}></img>
        <h1 className="font-logo text-blue-950">DigiVote</h1>
      </Link>
      <ul className="hidden items-center gap-14 text-lg md:flex">
        <Link onClick={() => handleAudio("Navigate to Home Page")} to="/home">
          Home
        </Link>
        <Link
          onClick={() =>
            handleAudio("Navigate to Map pages listing polling booths")
          }
          to="/boothmap"
        >
          Booths
        </Link>
        <Link
          onClick={() =>
            handleAudio("Navigate to Sign Up and create user profile")
          }
          to="/signup"
        >
          <button className="rounded-lg bg-blue-600 px-4 py-1.5 font-bold text-white">
            Sign Up
          </button>
        </Link>
        <Link
          onClick={() => handleAudio("Navigate and login to your account")}
          to="/login"
        >
          <button className="font-bold text-blue-600">Log In</button>
        </Link>
      </ul>
    </nav>
  );
}

export default LandingNav;

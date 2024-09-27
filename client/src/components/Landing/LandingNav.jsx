import React from "react";

import { Link } from "react-router-dom";

import logo from "../../assets/logos/digivote.png";

function LandingNav({}) {
  return (
    <nav className="flex items-center justify-start md:justify-between bg-transparent md:px-24 md:py-8 px-4 py-6 font-body font-medium">
      <Link to="\" className="flex items-center gap-4 select-none text-3xl font-bold text-black-soft">
        <img className="w-16" src={logo}></img>
        <h1 className="font-logo text-blue-950">DigiVote</h1>
      </Link>
      <ul className="md:flex items-center gap-4 hidden">
        <Link to="/home">Home</Link>
        <Link to="/boothmap">Booths</Link>
        <button className="rounded-lg bg-blue-600 px-4 py-2 font-bold text-white">
          Sign Up
        </button>
        <button className="font-bold text-blue-600">Log In</button>
      </ul>
    </nav>
  );
}

export default LandingNav;

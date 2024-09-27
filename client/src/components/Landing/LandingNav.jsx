import React from "react";

import { Link } from "react-router-dom";

import logo from "../../assets/logos/digivote.png";

function LandingNav({}) {
  return (
    <nav className="flex items-center justify-start md:justify-between bg-transparent md:px-24 md:py-8 px-4 py-6 font-body font-medium">
      <Link to="/" className="flex items-center gap-4 select-none text-3xl md:text-4xl font-bold text-black-soft">
        <img className="w-16" src={logo}></img>
        <h1 className="font-logo text-blue-950">DigiVote</h1>
      </Link>
      <ul className="md:flex text-lg items-center gap-14 hidden">
        <Link to="/home">Home</Link>
        <Link to="/boothmap">Booths</Link>
        <Link to="/signup">
          <button className="rounded-lg bg-blue-600 px-4 py-1.5 font-bold text-white">
            Sign Up
          </button>
        </Link>
        <button className="font-bold text-blue-600">Log In</button>
      </ul>
    </nav>
  );
}

export default LandingNav;

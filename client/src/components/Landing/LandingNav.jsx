import React from "react";

import { Link } from "react-router-dom";

import logo from "../../assets/logos/digivote.png";

function LandingNav({}) {
  return (
    <nav className="flex items-center justify-between bg-transparent px-24 py-8 font-body font-medium">
      <div className="flex items-center gap-4 text-3xl font-bold text-black-soft">
        <img className="w-16" src={logo}></img>
        <h1 className="font-logo text-blue-950">DigiVote</h1>
      </div>
      <ul className="flex items-center gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button className="rounded-lg bg-blue-600 px-4 py-2 font-bold text-white">
          Sign Up
        </button>
        <button className="font-bold text-blue-600">Log In</button>
      </ul>
    </nav>
  );
}

export default LandingNav;

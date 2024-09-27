import React from 'react';
import logo from "../../assets/logos/digivote.png";

import {Link} from "react-router-dom";

function LandingNav ({}) {
  return (
    <nav className="bg-transparent flex items-center justify-between font-body font-medium px-24 py-8">
      <div className="flex font-bold gap-4 items-center text-black-soft text-3xl">
        <img className="w-16" src={logo}></img>
        <h1 className="font-logo text-blue-950">DigiVote</h1>
      </div>
      <ul className="flex gap-4 items-center">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button className="bg-blue-600 text-white rounded-lg font-bold px-4 py-2">Sign Up</button>
        <button className="text-blue-600 font-bold">Log In</button>
      </ul>
    </nav>
  );
};

export default LandingNav;

import React from "react";

import { Link } from "react-router-dom";

import logo from "../../assets/logos/digivote.png";

function Navbar({}) {
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
      </ul>
    </nav>
  );
}

export default Navbar;

import React from "react";

import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

import logo from "../../assets/logos/digivote.png";
import TranslateButton from "../TranslateButton";

function NavDesktop({}) {
  return (
    <nav className="flex items-center justify-start bg-transparent px-4 py-6 font-body font-medium md:justify-between md:px-24 md:py-8">
      <Link
        to="/"
        className="flex select-none items-center gap-4 text-3xl font-bold text-black-soft md:text-4xl"
      >
        <img className="w-16" src={logo}></img>
        <h1 className="font-logo text-blue-950">DigiVote</h1>
      </Link>
      <ul className="hidden items-center gap-14 text-lg md:flex">
        <Link to="/home">Home</Link>
        <Link to="/voting">Vote</Link>
        <Link to="/boothmap">Booths</Link>
        <Link to="/profile">
          <CgProfile className="text-3xl" />
        </Link>
      </ul>
    </nav>
  );
}

export default NavDesktop;

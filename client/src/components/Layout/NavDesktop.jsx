import React from "react";

import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

import logo from "../../assets/logos/digivote.png";

function NavDesktop({}) {
  return (
    <nav className="flex items-center justify-start md:justify-between bg-transparent md:px-24 md:py-8 px-4 py-6 font-body font-medium">
      <Link to="/" className="flex items-center gap-4 select-none text-3xl md:text-4xl font-bold text-black-soft">
        <img className="w-16" src={logo}></img>
        <h1 className="font-logo text-blue-950">DigiVote</h1>
      </Link>
      <ul className="md:flex text-lg items-center gap-14 hidden">
        <Link to="/home">Home</Link>
        <Link to="/voting">Vote</Link>
        <Link to="/boothmap">Booths</Link>
        <Link to="/profile"><CgProfile className="text-3xl"/></Link>
      </ul>
    </nav>
  );
}

export default NavDesktop;

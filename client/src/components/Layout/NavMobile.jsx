import React from "react";

import { CgProfile } from "react-icons/cg";
import { IoLocation } from "react-icons/io5";
import { MdHome, MdHowToVote } from "react-icons/md";
import { Link } from "react-router-dom";

function NavMobile() {
  return (
    <nav className="fixed bottom-4 left-4 right-4 flex items-center justify-around rounded-xl bg-black-soft px-4 py-4 font-body font-medium shadow-lg md:hidden">
      <ul className="flex w-full items-center justify-around text-lg">
        <li>
          <Link to="/home">
            <MdHome className="text-3xl text-white" />
          </Link>
        </li>
        <li>
          <Link to="/voting">
            <MdHowToVote className="text-3xl text-white" />
          </Link>
        </li>
        <li>
          <Link to="/boothmap">
            <IoLocation className="text-3xl text-white" />
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <CgProfile className="text-3xl text-white" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavMobile;

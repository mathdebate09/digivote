import React from 'react';

import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { MdHome } from "react-icons/md";
import { MdHowToVote } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

function NavMobile() {
  return (
    <nav className="fixed bottom-4 left-4 right-4 rounded-xl flex items-center px-4 justify-around bg-black-soft shadow-lg py-4 font-body font-medium md:hidden">
      <ul className="flex text-lg items-center w-full justify-around">
        <li>
          <Link to="/home"><MdHome className="text-3xl text-white" /></Link>
        </li>
        <li>
          <Link to="/voting"><MdHowToVote className="text-3xl text-white" /></Link>
        </li>
        <li>
          <Link to="/boothmap"><IoLocation className="text-3xl text-white" /></Link>
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

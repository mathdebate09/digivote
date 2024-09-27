// eslint-disable-next-line no-unused-vars
import React from "react";

import Footer from "../Layout/Footer";
import LandingNav from "./LandingNav";
import Hero from "./Hero";

function Landing() {
  return (
    <div className="bg-gradient-to-tr from-gray-100 via-cyan-50 to-blue-200">
    <LandingNav />
    <Hero />
    <Footer />
    </div>
  );
}

export default Landing;

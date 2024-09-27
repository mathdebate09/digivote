// eslint-disable-next-line no-unused-vars
import React from "react";

import Footer from "../Layout/Footer";
import Hero from "./Hero";
import LandingNav from "./LandingNav";
import ChatBot from "../ChatBot"

function Landing() {
  return (
    <div className="bg-gradient-to-tr from-gray-100 via-cyan-50 to-blue-200">
      <LandingNav />
      <Hero />
      <ChatBot />
      <Footer />
    </div>
  );
}

export default Landing;

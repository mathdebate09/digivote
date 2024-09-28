// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";

import { motion } from "framer-motion";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

import ChatBot from "../ChatBot";
import TranslateButton from "../TranslateButton";


import Footer from "../Layout/Footer";
import Hero from "./Hero";
import LandingNav from "./LandingNav";
import SignButton from "../SignButton";

function Landing() {
  useEffect(()=> {
    handleAudio("Welcome to Digivote, a more secure and user friendly web app with accessibility for normal and the specially abled, alike")
  })
  // const textVariants = {
  //   hidden: { opacity: 0, x: -50 },
  //   visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  // };

  // useEffect(() => {
  //   // Initial setup for the purple ball animation
  //   gsap.set(".ball", { xPercent: -50, yPercent: -50 });
  //   let targets = gsap.utils.toArray(".ball");

  //   window.addEventListener("mouseleave", () => {
  //     gsap.to(targets, {
  //       duration: 0.5,
  //       scale: 0,
  //       ease: "power1.out",
  //       overwrite: "auto",
  //       stagger: 0.02,
  //     });
  //   });

  //   window.addEventListener("mouseenter", () => {
  //     gsap.to(targets, {
  //       duration: 0.5,
  //       scale: 1,
  //       ease: "power1.out",
  //       overwrite: "auto",
  //       stagger: 0.02,
  //     });
  //   });

  //   window.addEventListener("mousemove", (e) => {
  //     gsap.to(targets, {
  //       duration: 0.5,
  //       x: e.clientX,
  //       y: e.clientY,
  //       ease: "power1.out",
  //       overwrite: "auto",
  //       stagger: 0.02,
  //     });
  //   });

  //   // Cleanup event listeners on component unmount
  //   return () => {
  //     window.removeEventListener("mouseleave", () => {});
  //     window.removeEventListener("mouseenter", () => {});
  //     window.removeEventListener("mousemove", () => {});
  //   };
  // }, []);
  return (
    <div className="bg-gradient-to-tr from-gray-100 via-cyan-50 to-blue-200 bg-opacity-5">
      {/* <motion.div
        className="text-center text-8xl font-bold max-md:text-6xl max-sm:text-4xl"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      ></motion.div> */}
      <LandingNav />
      <Hero />
      <SignButton />
      <TranslateButton />
      <ChatBot />
      <Footer />
      {/* <div className="ball fixed left-0 -z-[1] top-0 h-40 w-40 rounded-full bg-blue-500 blur-3xl"></div> */}
    </div>
  );
}

export default Landing;

import React, { useEffect, useState } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (time) => {
    return (
      <div className="flex items-center gap-1 text-3xl md:text-4xl">
        <span>{time.days}</span>{" "}
        <span className="self-end text-sm font-thin">DAYS</span> :
        <span>{time.hours}</span>{" "}
        <span className="self-end text-sm font-thin">HRS</span> :
        <span>{time.minutes}</span>{" "}
        <span className="self-end text-sm font-thin">MINS</span> :
        <span>{time.seconds}</span>{" "}
        <span className="self-end text-sm font-thin">SEC</span>
      </div>
    );
  };

  return (
    <div className="w-7/8 flex flex-col items-center justify-center rounded-lg bg-blue-500 p-4 text-center text-lg text-white md:w-3/5">
      <h1 className="font-extralight md:text-2xl">
        COUNTDOWN TO PARLIAMENT ELECTION RESULTS
      </h1>
      <div className="font-medium">
        {Object.keys(timeLeft).length ?
          formatTime(timeLeft)
        : <span>Time's up!</span>}
      </div>
    </div>
  );
};

export default CountdownTimer;

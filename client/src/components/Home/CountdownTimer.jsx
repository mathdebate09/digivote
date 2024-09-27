import React, { useState, useEffect } from 'react';

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
      <div className="flex items-center text-3xl md:text-4xl gap-1">
        <span>{time.days}</span> <span className="text-sm font-thin self-end">DAYS</span> :
        <span>{time.hours}</span> <span className="text-sm font-thin self-end">HRS</span> :
        <span>{time.minutes}</span> <span className="text-sm font-thin self-end">MINS</span> :
        <span>{time.seconds}</span> <span className="text-sm font-thin self-end">SEC</span>
      </div>
    );
  };

  return (
    <div className="flex text-lg p-4 text-center rounded-lg flex-col items-center w-7/8 md:w-3/5 justify-center bg-blue-500 text-white">
      <h1 className="md:text-2xl font-extralight">COUNTDOWN TO PARLIAMENT ELECTION RESULTS</h1>
      <div className="font-medium">
        {Object.keys(timeLeft).length ? formatTime(timeLeft) : <span>Time's up!</span>}
      </div>
    </div>
  );
};

export default CountdownTimer;

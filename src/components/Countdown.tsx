import React, { useEffect, useState } from "react";

const Countdown: React.FC = () => {
  const targetDate = new Date("2026-03-15T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center gap-4 text-white text-lg font-bold">
      {Object.entries(timeLeft).map(([key, value]) => (
        <div
          key={key}
          className="bg-black/40 px-4 py-2 rounded-lg shadow-lg text-center animate-pulse"
        >
          <div className="text-3xl text-orange-400">{value}</div>
          <div className="text-sm uppercase">{key}</div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;

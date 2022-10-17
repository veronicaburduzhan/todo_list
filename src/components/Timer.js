import React, { useEffect, useState } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p className="timer">You have used {seconds} seconds on this website</p>
    </div>
  );
}
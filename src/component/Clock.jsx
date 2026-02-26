"use client"
import { useEffect, useState } from "react";
import { motion } from 'motion/react'

export default function Clock({ ref }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={ref} className="font-poppins">
      {time.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })}
    </div>
  );
}
